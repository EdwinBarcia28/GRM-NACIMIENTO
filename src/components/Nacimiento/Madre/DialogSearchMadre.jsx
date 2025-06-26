import { useAuthStore } from "@/store/auth";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { Loader, Search } from "lucide-react";
import { AlertDialogHeader } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
//import { infoDeclaranteRequest, searchDeclaranteRequest } from "@/services/Declarante";
import { DataTableMadre} from "./DataTableMadre";
import { searchDeclaranteRequest } from "@/services/nacimiento";

export function DialogSearchMadre({valor}) {

  const { token } = useAuthStore();
  const [loadingMadre, setLoadingMadre] = useState(false);
  const [dataMadre, setDataMadre] = useState([]);
  const [filterMadre, setFilterMadre] = useState("");
  const [searchMadre, setSearchMadre] = useState("");


  const handleFilterMadre = (event) => {
    setFilterMadre(event);
  };

  const handleChangeSearchMadre = (event) => {
    setSearchMadre(event.target.value);
  };

  const handleClickSearchDataTableDeclarante = async (event) => {
    searchDeclaranteDataTable(event);
  };

  const handleBuscar = async (event) => {
    event.preventDefault();
    setLoadingMadre(true);

    const requestMadre = {
        Opcion: filterMadre,
        Filtro: searchMadre,
    };

    const responseMadre = await searchDeclaranteRequest(requestMadre,token)

      if (responseMadre === null || responseMadre === undefined) {
        return toast.error(
          "Comunicacion con el Servidor , se dio de forma interrumpida",
          {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
      } else if (responseDriver !== null || responseDriver !== undefined) {
        if (responseDriver.error === 1) {
          setLoadingDriver(false);
          return toast.error(responseDriver.message, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else if (responseDriver.error === 0) {
          setDataDriver(responseDriver.drivers);
          setLoadingDriver(false);
          return toast.success(responseDriver.message, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={valor} >
          <Search />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-full sm:max-w-[1200px] px-4 py-6 overflow-y-auto max-h-[90vh] sm:max-h-[100vh]">
        <AlertDialogHeader>
          <DialogTitle className="text-lg sm:text-xl text-center sm:text-left">
            Buscar Declarante
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base text-center sm:text-left">
            Ingrese el parametro de Busqueda y Filtre el Declarante.
          </DialogDescription>
        </AlertDialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="filterDeclarante">Criterio de Busqueda</Label>
            <Select
              id="filterDeclarante"
              name="filterDeclarante"
              value={filterMadre}
              onValueChange={handleFilterMadre}
            >
              <SelectTrigger id="filterDeclarante" name="filterDeclarante">
                <SelectValue placeholder="Seleccione un de Filtro" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Nombres</SelectItem>
                <SelectItem value="2">Apellido</SelectItem>
                <SelectItem value="3">Identificacion</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="searchMadre">Buscar</Label>
            <Input
              id="searchMadre"
              name="searchMadre"
              value={searchMadre}
              onChange={handleChangeSearchMadre}
            />
          </div>
          <div className="flex items-end">
            <Button
              onClick={handleClickSearchDataTableDeclarante}
              // disabled={loadingDeclarante}
            >
                <Search />
              {/* {loadingDeclarante ? <Loader className="animate-spin" /> : <Search />} */}
            </Button>
          </div>
        </div>
        <DataTableMadre data />
      </DialogContent>
    </Dialog>
  );
}
