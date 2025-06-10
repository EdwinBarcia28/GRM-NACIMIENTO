import { create } from 'zustand';

export const useNacimientoStore = create((set) => ({
  datosDeclarante: {},
  guardarDatosDeclarante: (data) =>
    set(() => ({
      datosDeclarante: data,
    })),
}));
