import { AppSidebar } from "@/components/Menu/AppSidebar";
import {  SidebarProvider } from "@/components/ui/sidebar";
// import { Route, Routes } from "react-router-dom";
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
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen bg-background text-foreground">
        <AppSidebar />
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold">Bienvenido al sistema</h1>
          <p>Este es el contenido principal.</p>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default Menu;