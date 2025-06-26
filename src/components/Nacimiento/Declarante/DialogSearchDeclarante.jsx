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
import { DataTableDeclarante } from "./DataTableDeclarante";

export function DialogSearchDeclarante() {
    const [filterDeclarante, setFilterDeclarante] = useState("");
    const [searchDeclarante, setSearchDeclarante] = useState("");

  const handleFilterDeclarante = (event) => {
    setFilterDeclarante(event);
  };

  const handleChangeSearchDeclarante = (event) => {
    setSearchDeclarante(event.target.value);
  };

  const handleKeyPressSearchDataTableDeclarante = async (event) => {
    if (event.key === "Enter") {
      searchDeclaranteDataTable(event);
    }
  };

  

//   const { selectEstablishments } = useAuthStore();

//   const [loadingDeclarante, setLoadingDeclarante] = useState(false);

//   const [dataDeclarante, setDataDeclarante] = useState([]);
//   const [filterDeclarante, setFilterDeclarante] = useState("");
//   const [searchDeclarante, setSearchDeclarante] = useState("");

//   const handleSelectChangeFilterDeclarante = (event) => {
//     setFilterDeclarante(event);
//   };

//   const handleSelectChangeSearchDeclarante = (event) => {
//     setSearchDeclarante(event.target.value);
//   };

//   const searchDeclaranteDataTable = async (event) => {
//     if (filterDeclarante) {
//       event.preventDefault();
//       setLoadingDeclarante(true);
//       const requestDeclarante = {
//         filter: filterDeclarante,
//         search: searchDeclarante,
//       };

//       const responseDeclarante = await searchDeclaranteRequest(requestDeclarante);

//       if (responseDeclarante === null || responseDeclarante === undefined) {
//         return toast.error(
//           "Comunicacion con el Servidor , se dio de forma interrumpida",
//           {
//             position: "top-right",
//             autoClose: 4000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "dark",
//           }
//         );
//       } else if (responseDeclarante !== null || responseDeclarante !== undefined) {
//         if (responseDeclarante.error === 1) {
//           setLoadingDeclarante(false);
//           return toast.error(responseDeclarante.message, {
//             position: "top-right",
//             autoClose: 4000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "dark",
//           });
//         } else if (responseDeclarante.error === 0) {
//           setDataDeclarante(responseDeclarante.Declarantes);
//           setLoadingDeclarante(false);
//           return toast.success(responseDeclarante.message, {
//             position: "top-right",
//             autoClose: 4000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "dark",
//           });
//         }
//       }
//     }
//   };

//   const handleKeyPressSearchDataTableDeclarante = async (event) => {
//     if (event.key === "Enter") {
//       searchDeclaranteDataTable(event);
//     }
//   };

  const handleClickSearchDataTableDeclarante = async (event) => {
    searchDeclaranteDataTable(event);
  };

//   const fetchDataDeclarante = useCallback(async () => {
//     const requestDeclarante = {
//       idCompany: selectEstablishments.idEmpresa,
//       idEstablishment: selectEstablishments.idDetalle,
//       isActive: 0,
//     };

//     const responseDeclarante = await infoDeclaranteRequest(requestDeclarante);

//     if (responseDeclarante === null || responseDeclarante === undefined) {
//       return toast.error(
//         "Comunicacion con el Servidor , se dio de forma interrumpida",
//         {
//           position: "top-right",
//           autoClose: 4000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//         }
//       );
//     } else if (responseDeclarante !== null || responseDeclarante !== undefined) {
//       if (responseDeclarante.error == 1) {
//         return toast.error(responseDeclarante.message, {
//           position: "top-right",
//           autoClose: 4000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//         });
//       } else if (responseDeclarante.error == 0) {
//         setDataDeclarante(responseDeclarante.Declarantes);
//         return toast.success(responseDeclarante.message, {
//           position: "top-right",
//           autoClose: 4000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//         });
//       }
//     }
//   }, [selectEstablishments]);

  return (
    <Dialog
    //   onOpenChange={(isOpen) => {
    //     if (isOpen) {
    //       fetchDataDeclarante();
    //     }
    //   }}
    >
      <DialogTrigger asChild>
        <Button>
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
              value={filterDeclarante}
              onValueChange={handleFilterDeclarante}
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
            <Label htmlFor="searchDeclarante">Buscar</Label>
            <Input
              id="searchDeclarante"
              name="searchDeclarante"
              value={searchDeclarante}
              onChange={handleChangeSearchDeclarante}
              onKeyPress={handleKeyPressSearchDataTableDeclarante}
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
        <DataTableDeclarante data />
      </DialogContent>
    </Dialog>
  );
}
