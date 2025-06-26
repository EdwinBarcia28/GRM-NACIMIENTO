import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { CardWithDeclarante } from "@/components/Nacimiento/Declarante/CardWithDeclarante";
import { CardWithPlaceNac } from "@/components/Nacimiento/Declarante/CardWithPlaceNac";
import { CardWithDomicilioNac } from "@/components/Nacimiento/Declarante/CardWithDomicilioNac";
import { CardWithGrupoEtnico } from "@/components/Nacimiento/Declarante/CardWithGrupoEtnico";

import { Card,CardContent } from "@/components/ui/card";
import { useNacimientoStore } from "@/store/Nacimiento/nacimientoStore";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

import { CardWithInfoMadre } from "@/components/Nacimiento/Madre/CardWithInfoMadre";
import { CardWithPlaceNacMadre } from "@/components/Nacimiento/Madre/CardWithPlaceNacMadre";
import { CardWithDomicilioNacMadre } from "@/components/Nacimiento/Madre/CardWithDomicilioNacMadre";
import { CardWithGrupoEtnicoMadre } from "@/components/Nacimiento/Madre/CardWithGrupoEtnicoMadre";


export default function Nacimiento() {
  const [tabPrincipal, setTabPrincipal] = useState("madre");
  const [tabSecundario, setTabSecundario] = useState("declarante");

  //   const [tabActual, setTabActual] = useState("declarante");

  const { datosDeclarante } = useNacimientoStore();
  const puedeAvanzarAFN = datosDeclarante && Object.keys(datosDeclarante).length > 0;

  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="flex justify-center items-center min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-4">
          <Tabs value={tabPrincipal} onValueChange={setTabPrincipal} className="w-full">
            <TabsList className="grid grid-cols-3 w-full mb-4">
              <TabsTrigger value="madre">Madre</TabsTrigger>
              <TabsTrigger value="padre">Padre</TabsTrigger>
              <TabsTrigger value="declarante">Declarante</TabsTrigger>
            </TabsList>
            <Card>
              <CardContent className="flex flex-col items-center">
                <TabsContent value="madre">
                  <Tabs value={tabSecundario} onValueChange={setTabSecundario}  className="w-[400px] sm:w-[1100px]">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="declarante">Declarante</TabsTrigger>
                        <TabsTrigger value="fechaNacimiento" disabled={!puedeAvanzarAFN} >Fecha Nacimiento</TabsTrigger>
                        <TabsTrigger value="domicilioNacimiento" disabled={!puedeAvanzarAFN} >Domicilio</TabsTrigger>
                      <TabsTrigger value="grupoEtnico" disabled={!puedeAvanzarAFN} >Grupo Etnico</TabsTrigger>
                    </TabsList>
                    <TabsContent value="declarante">
                      <CardWithInfoMadre irAlSiguienteTab={() => setTabSecundario("fechaNacimiento")}  />
                    </TabsContent>
                    <TabsContent value="fechaNacimiento">
                      <CardWithPlaceNacMadre irAlSiguienteTab={() => setTabSecundario("domicilioNacimiento")} />
                    </TabsContent>
                    <TabsContent value="domicilioNacimiento">
                      <CardWithDomicilioNacMadre irAlSiguienteTab={() => setTabSecundario("grupoEtnico")} />
                    </TabsContent>
                    <TabsContent value="grupoEtnico">
                      <CardWithGrupoEtnicoMadre />
                    </TabsContent>
                  </Tabs>
                </TabsContent>

                {/* Contenido de PADRE */}
                <TabsContent value="padre">
                  <div className="flex justify-center">
                    <Tabs value={tabSecundario} onValueChange={setTabSecundario} className="w-[400px] sm:w-[1100px]">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="declarante">Declarante</TabsTrigger>
                          <TabsTrigger value="fechaNacimiento" disabled={!puedeAvanzarAFN} >Fecha Nacimiento</TabsTrigger>
                          <TabsTrigger value="domicilioNacimiento" disabled={!puedeAvanzarAFN} >Domicilio</TabsTrigger>
                        <TabsTrigger value="grupoEtnico" disabled={!puedeAvanzarAFN} >Grupo Etnico</TabsTrigger>
                      </TabsList>
                      <TabsContent value="declarante">
                        {/* <CardWithDeclarante irAlSiguienteTab={() => setTabSecundario("fechaNacimiento")}  /> */}
                      </TabsContent>
                      <TabsContent value="fechaNacimiento">
                        <CardWithPlaceNac irAlSiguienteTab={() => setTabSecundario("domicilioNacimiento")} />
                      </TabsContent>
                      <TabsContent value="domicilioNacimiento">
                        <CardWithDomicilioNac irAlSiguienteTab={() => setTabSecundario("grupoEtnico")} />
                      </TabsContent>
                      <TabsContent value="grupoEtnico">
                        <CardWithGrupoEtnico />
                      </TabsContent>
                    </Tabs>
                  </div>
                </TabsContent>

                {/* Contenido de DECLARANTE */}
                <TabsContent value="declarante">
                  <Tabs value={tabSecundario} onValueChange={setTabSecundario} className="w-[400px] sm:w-[1100px]">
                    <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="declarante">Declarante</TabsTrigger>
                      <TabsTrigger value="fechaNacimiento" disabled={!puedeAvanzarAFN} >Fecha Nacimiento</TabsTrigger>
                      <TabsTrigger value="domicilioNacimiento" disabled={!puedeAvanzarAFN} >Domicilio</TabsTrigger>
                    <TabsTrigger value="grupoEtnico" disabled={!puedeAvanzarAFN} >Grupo Etnico</TabsTrigger>
                    </TabsList>
                    <TabsContent value="declarante">
                      <CardWithDeclarante irAlSiguienteTab={() => setTabSecundario("fechaNacimiento")}  />
                    </TabsContent>
                    <TabsContent value="fechaNacimiento">
                      <CardWithPlaceNac irAlSiguienteTab={() => setTabSecundario("domicilioNacimiento")} />
                    </TabsContent>
                    <TabsContent value="domicilioNacimiento">
                      <CardWithDomicilioNac irAlSiguienteTab={() => setTabSecundario("grupoEtnico")} />
                    </TabsContent>
                    <TabsContent value="grupoEtnico">
                      <CardWithGrupoEtnico />
                    </TabsContent>
                  </Tabs>
                </TabsContent>

              </CardContent>
            </Card>
          </Tabs>
        </div>
      </div>
    </>
        
  );
}





// import { CardWithFormClient } from "@/components/IdRoot/Client/CardWithFormClient";
// import { CardWithDeclarante } from "@/components/Nacimiento/CardWithDeclarante";
// import { CardWithDomicilioNac } from "@/components/Nacimiento/CardWithDomicilioNac";
// import { CardWithGrupoEtnico } from "@/components/Nacimiento/CardWithGrupoEtnico";
// import { CardWithPlaceNac } from "@/components/Nacimiento/CardWithPlaceNac";
// import { Separator } from "@/components/ui/separator";
// import { SidebarTrigger } from "@/components/ui/sidebar";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { useNacimientoStore } from "@/store/Nacimiento/nacimientoStore";
// import { useState } from "react";


// export default function Nacimiento() {
//   const [tabActual, setTabActual] = useState("declarante");

//   const { datosDeclarante } = useNacimientoStore();

//   const puedeAvanzarAFN = datosDeclarante && Object.keys(datosDeclarante).length > 0;

//   return (
//     <>
//       <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
//         <div className="flex items-center gap-2 px-4">
//           <SidebarTrigger className="-ml-1" />
//           <Separator orientation="vertical" className="mr-2 h-4" />
//         </div>
//       </header>
//       <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
//         <div className="flex justify-center items-center min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
//           <Tabs value={tabActual} onValueChange={setTabActual}  className="w-[400px] sm:w-[1100px]">
//             <TabsList className="grid w-full grid-cols-4">
//               <TabsTrigger value="declarante">Declarante</TabsTrigger>
//               <TabsTrigger value="fechaNacimiento" disabled={!puedeAvanzarAFN} >Fecha Nacimiento</TabsTrigger>
//               <TabsTrigger value="domicilioNacimiento" disabled={!puedeAvanzarAFN} >Domicilio</TabsTrigger>
//               <TabsTrigger value="grupoEtnico" disabled={!puedeAvanzarAFN} >Grupo Etnico</TabsTrigger>
//             </TabsList>
//             <TabsContent value="declarante">
//               <CardWithDeclarante irAlSiguienteTab={() => setTabActual("fechaNacimiento")}  />
//             </TabsContent>
//             {/* <TabsContent value={tabActual}>
//               <CardWithPlaceNac irAlSiguienteTab={() => setTabActual("domicilioNacimiento")} />
//             </TabsContent>
//             <TabsContent value={tabActual}>
//               <CardWithDomicilioNac irAlSiguienteTab={() => setTabActual("grupoEtnico")} />
//             </TabsContent>
//             <TabsContent value={tabActual}>
//               <CardWithGrupoEtnico />
//             </TabsContent> */}

//             <TabsContent value="fechaNacimiento">
//               <CardWithPlaceNac irAlSiguienteTab={() => setTabActual("domicilioNacimiento")} />
//             </TabsContent>
//             <TabsContent value="domicilioNacimiento">
//               <CardWithDomicilioNac irAlSiguienteTab={() => setTabActual("grupoEtnico")} />
//             </TabsContent>
//             <TabsContent value="grupoEtnico">
//               <CardWithGrupoEtnico />
//             </TabsContent>
//           </Tabs>
//         </div>
//       </div>
//     </>
//   );
// }
