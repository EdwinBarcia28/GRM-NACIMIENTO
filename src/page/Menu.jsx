import { AppSidebar } from "@/components/Menu/AppSidebar";
import {  SidebarProvider ,SidebarInset } from "@/components/ui/sidebar";
import Nacimiento from "./Nacimiento";
import { Route, Routes } from "react-router-dom";
// import Product from "./IdRoot/Product";
// import Client from "./IdRoot/Client";
// import Driver from "./IdRoot/Driver";
// import Vehicle from "./IdRoot/Vehicle";
// import Order from "./IdRoot/Order";
// import BusinessManagement from "./Portal/BusinessManagement";
// import MyConsumptions from "./Portal/MyConsumptions";
// import UserManagement from "./Portal/UserManagement";
// import Receipt from "./Portal/Receipt";
// import Home from "./Home";
// import Profile from "./Profile";
// import MyConsumption from "./IdRoot/MyConsumption";

function Menu() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Routes>
          <Route path="/nacimiento" element={<Nacimiento />} />
        </Routes>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default Menu;