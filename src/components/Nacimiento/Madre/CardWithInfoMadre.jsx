import { Search } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { DialogRefreshProfile } from "../../Menu/DialogRefreshProfile";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useNacimientoStore } from "@/store/Nacimiento/nacimientoStore";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { DialogSearchMadre } from "./DialogSearchMadre";
import { ArrowRigthNacimientoMadre } from "./ArrowRigthNacimientoMadre";

export const CardWithInfoMadre = ({ irAlSiguienteTab }) => {

  const { guardarDatosDeclarante } = useNacimientoStore();
  const { datosDeclarante } = useNacimientoStore();
 

  const [llenado, setLlenado] = useState("bu");

  useEffect(() =>{
    if(llenado === "bu") {
      setApellidos("");
      setNombres("");
      setTipoDocumento("1");
      setNumeroDocumento("");
      setFechaNacimiento("");
      setTipoSexo("1");
      setTipoNacionalidad("1");
      setTipoEstadoCivil("1");

    }
  },[llenado])

  const camposDesactivados = llenado === "bu" ? true : false;
  const botonDesactivados = llenado === "bu" ? false : true;

  console.log("camposDesactivados", botonDesactivados);

  const [apellidos, setApellidos] = useState("");
  const [nombres, setNombres] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("1");
  const [numeroDocumento, setNumeroDocumento] = useState("");

  const [fechaNacimiento, setFechaNacimiento] = useState(() => {
    const hoy = new Date();
    return hoy.toISOString().split("T")[0];
  });

  const [tipoSexo, setTipoSexo] = useState("1");
  const [tipoNacionalidad, setTipoNacionalidad] = useState("1");
  const [tipoEstadoCivil, setTipoEstadoCivil] = useState("1");

  // REGION DE ONCHANGE PARA LOS INPUTS
  const handleApellidosChange = (event) => {
    setApellidos(event.target.value);
  }

  const handleNombresChange = (event) => {
    setNombres(event.target.value);
  }

  const handleNumeroDocumentoChange = (event) => {
    setNumeroDocumento(event.target.value);
  }

  const handleFechaNacimientoChange = (e) => {
    setFechaNacimiento(e.target.value); // e.g. "2025-06-03"
  };

  const handleGuardarSeccion = () => {

    if (!apellidos) {
      return toast.error("Debe ingresar los Apellidos", { position: "top-right" });
    }
    if (!nombres) {
      return toast.error("Debe ingresar los Nombres", { position: "top-right" });
    }
    if (!tipoDocumento) {
      return toast.error("Debe ingresar el Tipo de Documento", { position: "top-right" });
    }
    if (!numeroDocumento) {
      return toast.error("Debe ingresar el Número de Documento", { position: "top-right" });
    }
    if (!fechaNacimiento) {
      return toast.error("Debe ingresar la Fecha de Nacimiento", { position: "top-right" });
    }
    if (!tipoSexo) {
      return toast.error("Debe ingresar el Sexo", { position: "top-right" });
    }
    if (!tipoNacionalidad) {
      return toast.error("Debe ingresar la Nacionalidad", { position: "top-right" });
    }
    if (!tipoEstadoCivil) {
      return toast.error("Debe ingresar el Estado Civil", { position: "top-right" });
    }

    guardarDatosDeclarante({
      tipoDeclarante,
      apellidos,
      nombres,
      tipoDocumento,
      numeroDocumento,
      fechaNacimiento,
      tipoSexo,
      tipoNacionalidad,
      tipoEstadoCivil,
    });

    irAlSiguienteTab();
  };

  return (
    <Card>
      <CardHeader>
        <div className="grid grid-cols-3 gap-5">
          <div className="flex flex-col space-y-1.5 ">
            <CardTitle>Gestión de Nacimientos</CardTitle>
            <CardDescription>
            En esta opción se puede crear la información del usuario.
            </CardDescription>
          </div>

          <div className="flex items-center h-20">
            <RadioGroup 
              name="typeIdentificationClient" 
              className="flex gap-4"
              value={llenado}
              onValueChange={setLlenado}
            >
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
            <DialogSearchMadre valor={botonDesactivados}/>
          </div>
        </div>
        
      </CardHeader>
      <CardContent>
        

        {/* Fila principal de formulario */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="apellidos">Apellidos</Label>
            <Input 
              placeholder="Ingrese los apellidos"
              value={apellidos} 
              onChange={handleApellidosChange}
              disabled={camposDesactivados}
              />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="nombres">Nombres</Label>
            <Input 
              placeholder="Ingrese los nombres" 
              value={nombres}
              onChange={handleNombresChange}
              disabled={camposDesactivados}
              />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="tipoDocumento">Tipo de Documento</Label>
            <Select onValueChange={setTipoDocumento} value={tipoDocumento} disabled={camposDesactivados}>
              <SelectTrigger>
                <SelectValue placeholder="Seleccione un Tipo de Documento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Cedula</SelectItem>
                <SelectItem value="2">Ruc</SelectItem>
                <SelectItem value="3">Pasaporte</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="numeroDocumento">Número de Documento</Label>
            <Input 
              placeholder="Ingrese número de documento"
              value={numeroDocumento}
              onChange={handleNumeroDocumentoChange} 
              disabled={camposDesactivados}/>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="fechaNacimiento">Fecha de Nacimiento</Label>
            <input
              id="fechaNacimiento"
              type="date"
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={fechaNacimiento}
              onChange={handleFechaNacimientoChange}
              max={new Date().toISOString().split("T")[0]}
              disabled={camposDesactivados}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="sexo">Sexo</Label>
            <Select onValueChange={setTipoSexo} value={tipoSexo} disabled={camposDesactivados}>
              <SelectTrigger>
                <SelectValue placeholder="Seleccione Sexo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Masculino</SelectItem>
                <SelectItem value="2">Femenino</SelectItem>
                <SelectItem value="3">Otros</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="nacionalidad">Nacionalidad</Label>
            <Select onValueChange={setTipoNacionalidad} value={tipoNacionalidad} disabled={camposDesactivados} >
              <SelectTrigger>
                <SelectValue placeholder="Seleccione Nacionalidad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Ecuador</SelectItem>
                <SelectItem value="2">Peru</SelectItem>
                <SelectItem value="3">Estados Unidos</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="estadoCivil">Estado Civil</Label>
            <Select onValueChange={setTipoEstadoCivil} value={tipoEstadoCivil} disabled={camposDesactivados} >
              <SelectTrigger>
                <SelectValue placeholder="Seleccione Estado Civil" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Soltero</SelectItem>
                <SelectItem value="2">Casado</SelectItem>
                <SelectItem value="3">Divorciado</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Botones */}
          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-4">
              <DialogRefreshProfile />
              <ArrowRigthNacimientoMadre handleClickAcceptProfile={handleGuardarSeccion} />  
              {/* <DialogAcceptProfile /> */}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

  );
};
