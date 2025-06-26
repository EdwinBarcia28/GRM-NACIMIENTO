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
import { DialogAcceptProfile } from "@/components/Menu/DialogAcceptProfile";
import { DialogRefreshProfile } from "@/components/Menu/DialogRefreshProfile";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";


export const CardWithGrupoEtnicoMadre = () => {
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
            {/* Grupo Étnico en su propia fila */}
            <div className="grid grid-cols-2 mb-4">
                <div className="flex flex-col space-y-1.5">
                <Label htmlFor="filterClient">Grupo Étnico</Label>
                <Select id="filterClient" name="filterClient">
                    <SelectTrigger>
                    <SelectValue placeholder="Seleccione un Grupo Étnico" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="meztizo">Mestizo</SelectItem>
                    <SelectItem value="blanco">Blanco</SelectItem>
                    <SelectItem value="otros">Otros</SelectItem>
                    </SelectContent>
                </Select>
                </div>
            </div>

            {/* Comprobante, Fecha de Nacimiento y Cantidad en una fila de 3 columnas */}
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="flex flex-col space-y-1.5">
                <Label htmlFor="comprobante">N° Comprobante</Label>
                <Input id="comprobante" placeholder="Ingrese número Comprobante" />
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
                <Label htmlFor="cantidad">Cantidad de Nacimientos</Label>
                <Input id="cantidad" placeholder="Ej: 1" />
                </div>
            </div>

            {/* Certificado y Observaciones en dos columnas */}
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col space-y-1.5">
                <Label htmlFor="certificado">Certificado</Label>
                <textarea
                    id="certi"
                    rows={3}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
                </div>
                <div className="flex flex-col space-y-1.5">
                <Label htmlFor="observaciones">Observaciones</Label>
                <textarea
                    id="observaciones"
                    rows={3}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
                </div>
            </div>

            {/* Botones */}
            <div className="grid grid-cols-2 gap-4">
                <DialogRefreshProfile />
                <DialogAcceptProfile />
            </div>
        </CardContent>
    </Card>

  );
};
