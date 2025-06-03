// import { CardWithFormClient } from "@/components/IdRoot/Client/CardWithFormClient";
import { CardWithDeclarante } from "@/components/Nacimiento/CardWithDeclarante";
import { CardWithDomicilioNac } from "@/components/Nacimiento/CardWithDomicilioNac";
import { CardWithGrupoEtnico } from "@/components/Nacimiento/CardWithGrupoEtnico";
import { CardWithPlaceNac } from "@/components/Nacimiento/CardWithPlaceNac";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


export default function Nacimiento() {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="flex justify-center items-center min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
          <Tabs defaultValue="declarante" className="w-[400px] sm:w-[1100px]">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="declarante">Declarante</TabsTrigger>
              <TabsTrigger value="fechaNacimiento">Fecha Nacimiento</TabsTrigger>
              <TabsTrigger value="domicilioNacimiento">Domicilio</TabsTrigger>
              <TabsTrigger value="grupoEtnico">Grupo Etnico</TabsTrigger>
            </TabsList>
            <TabsContent value="declarante">
              <CardWithDeclarante />
            </TabsContent>
            <TabsContent value="fechaNacimiento">
              <CardWithPlaceNac />
            </TabsContent>
            <TabsContent value="domicilioNacimiento">
              <CardWithDomicilioNac />
            </TabsContent>
            <TabsContent value="grupoEtnico">
              <CardWithGrupoEtnico />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
