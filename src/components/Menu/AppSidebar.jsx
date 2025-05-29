import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useAuthStore } from "@/store/auth";
import { EstablishmentSwitcher } from "./EstablishmentSwitcher";
import { NavMain } from "./NavMain";
import { NavUser } from "./NavUser";

export function AppSidebar(props) {
  const {
    dataUser,
    dataEstablishments,
    dataMenu,
    selectEstablishments,
    setSelectEstablishments,
  } = useAuthStore();

  const data = {
    user: {
      nombreUsuario: dataUser.nombreUsuario,
      email: dataUser.email,
      avatar: "/avatars/shadcn.jpg",
    },
    companies: dataEstablishments,
    menu: dataMenu,
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <EstablishmentSwitcher
          companies={data.companies}
          selectEstablishments={selectEstablishments}
          setSelectEstablishments={setSelectEstablishments}
        />
      </SidebarHeader>
      <SidebarContent>
        <NavMain menu={data.menu || []} /> 
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}