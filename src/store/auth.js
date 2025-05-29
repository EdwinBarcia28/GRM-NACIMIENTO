// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// export const useAuthStore = create(
//   persist(
//     (set) => ({
//       token: "",
//       dataUser: null,
//       dataEstablishments: null,
//       selectEstablishments: null,
//       dataMenu: null,
//       isAuth: false,
//       setToken: (token) => set(() => ({ token, isAuth: true })),
//       setDataUser: (dataUser) => set(() => ({ dataUser })),
//       setDataEstablishments: (dataEstablishments) =>
//         set(() => ({ dataEstablishments })),
//       setSelectEstablishments: (selectEstablishments) =>
//         set(() => ({ selectEstablishments })),
//       setDataMenu: (dataMenu) => set(() => ({ dataMenu })),
//       logOut: () =>
//         set({
//           token: "",
//           dataUser: null,
//           dataEstablishments: null,
//           selectEstablishments: null,
//           dataMenu: null,
//           isAuth: false,
//         }),
//     }),
//     { name: "auth" }
//   )
// );

// export const useAuthStore = create(
//   persist(
//     (set) => ({
//       token: "",
//       dataUser: null,
//       dataEstablishments: null,
//       selectEstablishments: null,
//       dataMenu: null,
//       isAuth: false,
//       setToken: (token) => set(() => ({ token, isAuth: true })),
//       setDataUser: (dataUser) => set(() => ({ dataUser })),
//       setDataEstablishments: (dataEstablishments) =>
//         set(() => ({ dataEstablishments })),
//       setSelectEstablishments: (selectEstablishments) =>
//         set(() => ({ selectEstablishments })),
//       setDataMenu: (dataMenu) => set(() => ({ dataMenu })),
//       logOut: () =>
//         set({
//           token: "",
//           dataUser: null,
//           dataEstablishments: null,
//           selectEstablishments: null,
//           dataMenu: null,
//           isAuth: false,
//         }),
//     }),
//     { name: "auth" }
//   )
// );

import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      token: "demo-token-123",
      isAuth: true,
      dataUser: {
        nombreUsuario: "Edwin Barcia",
        email: "edwin@example.com",
      },
      dataEstablishments: [
        { id: 1, nombre: "Corporacion Registro Civil" },
        { id: 2, nombre: "Sucursal Norte" },
      ],
      selectEstablishments: { id: 1, nombre: "Corporacion Registro Civil" },
      dataMenu: [
        {
          title: "Inicio",
          icon: "home",
          href: "/",
          submenu: [] 
        },
        {
          title: "Nacimientos",
          icon: "file-text",
          href: "/nacimientos",
          submenu: [] 
        },
        {
          title: "Reportes",
          icon: "bar-chart",
          href: "/reportes",
          submenu: [] 
        },
      ],
      setToken: (token) => set(() => ({ token, isAuth: true })),
      setDataUser: (dataUser) => set(() => ({ dataUser })),
      setDataEstablishments: (dataEstablishments) =>
        set(() => ({ dataEstablishments })),
      setSelectEstablishments: (selectEstablishments) =>
        set(() => ({ selectEstablishments })),
      setDataMenu: (dataMenu) => set(() => ({ dataMenu })),
      logOut: () =>
        set({
          token: "",
          dataUser: null,
          dataEstablishments: null,
          selectEstablishments: null,
          dataMenu: null,
          isAuth: false,
        }),
    }),
    { name: "auth" }
  )
);
