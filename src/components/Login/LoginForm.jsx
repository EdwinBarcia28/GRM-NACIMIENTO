import PropTypes from "prop-types";
import { useState } from "react";
import { useAuthStore } from "@/store/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginRequest } from "@/services/login";
import { cn } from "@/lib/utils";

export function LoginForm({ className, ...props }) {
  const navigate = useNavigate();

  const { setToken, setDataUser, setDataEstablishments } = useAuthStore();

  const [userLogin, setUserLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [isLoadingLogin, setIsLoadingLogin] = useState(true);


  const handleClickStartSession = async (event) => {
    event.preventDefault();
    if (userLogin === "" || passwordLogin === "") {
      return toast.error("¡Por favor, ingrese sus datos de Usuario! 🙃", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    setIsLoadingLogin(false);

    const userLoginDto = { Username: userLogin, Password: passwordLogin };

    console.log("userLoginDto", userLoginDto);
    const resLoginUser = await loginRequest(userLoginDto);

    if (resLoginUser === null) {
      setIsLoadingLogin(true);
      return toast.error(
        "Comunicacion con el Servidor , se dio de forma interrumpida",
        {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    } else if (resLoginUser !== undefined || resLoginUser !== null) {
      setIsLoadingLogin(true);

      if (resLoginUser.error == 1) {
        return toast.error(resLoginUser.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else if (resLoginUser.error == 0) {
        setToken("");
        setDataUser("");

        setToken(resLoginUser.token);
        setDataUser(resLoginUser.user);
        navigate("/menu");
      }
    }
  };

  

  const handleInputUserChange = (event) => {
    setUserLogin(event.target.value);
  };

  const handleInputPasswordChange = (event) => {
    setPasswordLogin(event.target.value);
  };


  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Corporacion Registro Civil de Guayaquil</CardTitle>
          <CardDescription>
            Bienvenido! Por favor ingrese sus datos de Usuario.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="username">Usuario</Label>
                <Input
                  id="username"
                  type="text"
                  value={userLogin}
                  onChange={handleInputUserChange}
                  autoComplete="name"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Contraseña</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={passwordLogin}
                  onChange={handleInputPasswordChange}
                />
              </div>
              <Button onClick={handleClickStartSession} className="w-full">
                {isLoadingLogin ? (
                  "Iniciar Sesion"
                ) : (
                  <Loader2 className="animate-spin" />
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

LoginForm.propTypes = {
  className: PropTypes.string,
};
