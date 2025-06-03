import { useAuthStore } from "@/store/auth";
import { Search } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DialogAcceptProfile } from "../Menu/DialogAcceptProfile";
import { DialogRefreshProfile } from "../Menu/DialogRefreshProfile";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const CardWithDeclarante = () => {
  const { dataUser } = useAuthStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gestión de Nacimientos</CardTitle>
        <CardDescription>
          En esta opción se puede crear la información del usuario.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Fila Select + RadioGroup */}
        <div className="grid grid-cols-3 gap-5">
          {/* Select: Tipo de Declarante */}
          <div className="flex flex-col space-y-1.5 ">
            <Label htmlFor="filterClient">Tipo de Declarante</Label>
            <Select id="filterClient" name="filterClient">
              <SelectTrigger id="filterClient" name="filterClient">
                <SelectValue placeholder="Seleccione un Declarante" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="madre">Madre</SelectItem>
                <SelectItem value="padre">Padre</SelectItem>
                <SelectItem value="otros">Otros</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* RadioGroup alineado con Select */}
          <div className="flex items-center h-20">
            <RadioGroup name="typeIdentificationClient" className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bu" id="buClient" />
                <Label htmlFor="buClient">BU</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="textual" id="textualClient" />
                <Label htmlFor="textualClient">Textual</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex items-center h-20">
            <Button>
              <Search />
            </Button>
          </div>
        </div>

        {/* Fila principal de formulario */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="apellidos">Apellidos</Label>
            <Input id="apellidos" placeholder="Ingrese los apellidos" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="nombres">Nombres</Label>
            <Input id="nombres" placeholder="Ingrese los nombres" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="tipoDocumento">Tipo de Documento</Label>
            <Input id="tipoDocumento" placeholder="Ej: Cédula, Pasaporte" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="numeroDocumento">Número de Documento</Label>
            <Input id="numeroDocumento" placeholder="Ingrese número de documento" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="fechaNacimiento">Fecha de Nacimiento</Label>
            <input
              id="fechaNacimiento"
              type="date"
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="sexo">Sexo</Label>
            <Input id="sexo" placeholder="Masculino / Femenino" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="nacionalidad">Nacionalidad</Label>
            <Input id="nacionalidad" placeholder="Ingrese nacionalidad" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="estadoCivil">Estado Civil</Label>
            <Input id="estadoCivil" placeholder="Ej: Soltero, Casado" />
          </div>

          {/* Botones */}
          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-4">
              <DialogRefreshProfile />
              <DialogAcceptProfile />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

  );
};
