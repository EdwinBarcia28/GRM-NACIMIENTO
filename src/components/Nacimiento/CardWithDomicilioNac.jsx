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

export const CardWithDomicilioNac = () => {
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
        <div className="flex items-center h-20 space-x-2 mt-4">
            <Label htmlFor="filterClient">Buscar Localidad</Label>
            <Button>
                <Search />
            </Button>
        </div>


        {/* Fila principal de formulario */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="calle">Calle del Nacido</Label>
            <Input id="calle" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="numero">Numero</Label>
            <Input id="numero" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="pais">Pais</Label>
            <Input id="pais" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="provincia">Provincia</Label>
            <Input id="provincia" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="localidad">Localidad</Label>
            <Input id="localidad" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="municipio">Municipio</Label>
            <Input id="municipio" />
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
