import { useAuthStore } from "@/store/auth";
import { toast } from "react-toastify";
import { useCallback, useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DialogAcceptProfile } from "./DialogAcceptProfile";
import { DialogRefreshProfile } from "./DialogRefreshProfile";

export const CardWithFormProfile = () => {
  const { dataUser } = useAuthStore();

//   const [nameProfile, setNameProfile] = useState("");
//   const [emailProfile, setEmailProfile] = useState("");
//   const [creationDateProfile, setCreationDateProfile] = useState("");
//   const [userNameProfile, setUserNameProfile] = useState("");
//   const [oldPasswordProfile, setOldPasswordProfile] = useState("");
//   const [newPasswordProfile, setNewPasswordProfile] = useState("");
//   const [newPasswordConfirmationProfile, setNewPasswordConfirmationProfile] =
//     useState("");

//   const handleChangeNameProfile = (event) => {
//     setNameProfile(event.target.value);
//   };

//   const handleChangeEmailProfile = (event) => {
//     setEmailProfile(event.target.value);
//   };

//   const handleChangeCreationDateProfile = (event) => {
//     setCreationDateProfile(event.target.value);
//   };

//   const handleChangeUserNameProfile = (event) => {
//     setUserNameProfile(event.target.value);
//   };

//   const handleChangeOldPasswordProfile = (event) => {
//     setOldPasswordProfile(event.target.value);
//   };

//   const handleChangeNewPasswordProfile = (event) => {
//     setNewPasswordProfile(event.target.value);
//   };

//   const handleChangeNewPasswordConfirmationProfile = (event) => {
//     setNewPasswordConfirmationProfile(event.target.value);
//   };

//   const fetchDataUserProfile = useCallback(async () => {
//     try {
//       const profileRequest = { IdUser: dataUser.id };

//       const responseProfile = await infoProfileRequest(profileRequest);

//       if (responseProfile == null) {
//         return toast.error(
//           "Comunicacion con el Servidor , se dio de forma interrumpida",
//           {
//             position: "top-right",
//             autoClose: 4000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "dark",
//           }
//         );
//       } else if (responseProfile != null) {
//         if (responseProfile.error == 1) {
//           return toast.error(responseProfile.message, {
//             position: "top-right",
//             autoClose: 4000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "dark",
//           });
//         } else if (responseProfile.error == 0) {
//           const { nombre, nombreUsuario, email, fechaCreacion } =
//             responseProfile.user;

//           setNameProfile(nombre);
//           setUserNameProfile(nombreUsuario);
//           setEmailProfile(email);
//           setCreationDateProfile(fechaCreacion);
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }, [dataUser.id]);

//   useEffect(() => {
//     fetchDataUserProfile();
//   }, [fetchDataUserProfile]);

//   const handleClickRefreshProfile = () => {
//     fetchDataUserProfile();
//     setOldPasswordProfile("");
//     setNewPasswordProfile("");
//     setNewPasswordConfirmationProfile("");
//   };

//   const handleClickAcceptProfile = async () => {
//     if (nameProfile === "") {
//       return toast.error("¡Por favor, ingrese el Nombre del Perfil a Editar!", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//       });
//     } else if (emailProfile === "") {
//       return toast.error("¡Por favor, ingrese el Correo del Perfil a Editar!", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//       });
//     } else if (userNameProfile === "") {
//       return toast.error("¡Por favor, ingrese el Correo del Perfil a Editar!", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//       });
//     }

//     const requestProfile = {
//       IdUser: dataUser.id,
//       Name: nameProfile,
//       Email: emailProfile,
//       OldPassword: oldPasswordProfile,
//       NewPassword: newPasswordProfile,
//       NewPasswordConfirmation: newPasswordConfirmationProfile,
//       UserName: userNameProfile,
//       UserModification: dataUser.nombreUsuario,
//     };

//     const responseProfile = await editProfileRequest(requestProfile);

//     if (responseProfile === null || responseProfile === undefined) {
//       return toast.error(
//         "Comunicacion con el Servidor , se dio de forma interrumpida",
//         {
//           position: "top-right",
//           autoClose: 4000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//         }
//       );
//     } else if (responseProfile !== null || responseProfile !== undefined) {
//       if (responseProfile.error == 1) {
//         return toast.error(responseProfile.message, {
//           position: "top-right",
//           autoClose: 4000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//         });
//       } else if (responseProfile.error == 0) {
//         setOldPasswordProfile("");
//         setNewPasswordProfile("");
//         setNewPasswordConfirmationProfile("");
//         return toast.success(responseProfile.message, {
//           position: "top-right",
//           autoClose: 4000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//         });
//       }
//     }
//   };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gestion de Nacimientos</CardTitle>
        <CardDescription>
          En esta opcion se puede crear la Informacion del Usuario.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col col-span-2 space-y-1.5">
            <Label htmlFor="nameDriver">Nombres</Label>
            <Input
              id="nameDriver"
              placeholder="Ingrese del recien nacido"
            />
          </div>
          <div className="flex flex-col col-span-2 space-y-1.5">
            <Label htmlFor="lastNameDriver">Apellidos</Label>
            <Input
              placeholder="Ingrese los Apellidos del recien nacido"
            />
          </div>
          <div className="flex flex-col col-span-2 space-y-1.5">
            <Label htmlFor="birthDateDriver">Fecha de Nacimiento</Label>
            <input
              id="birthDateDriver"
              name="birthDateDriver"
              type="date"
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-4">
              <DialogRefreshProfile
              />
              <DialogAcceptProfile
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
