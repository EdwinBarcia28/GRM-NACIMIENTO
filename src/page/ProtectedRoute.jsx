import { useAuthStore } from "@/store/auth";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const { isAuth, selectEstablishments } = useAuthStore();
  console.log("isAuth:", isAuth); // 👈 esto

  if (!isAuth) return <Navigate to="/" replace />;
  //if (!selectEstablishments) return <Navigate to="/establecimiento" replace />;

  return <Outlet />;
};
