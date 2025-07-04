import axiosInstance from "@/lib/axios";

export const searchDeclaranteRequest = async (declarante, token) => {
  try {
    const response = await axiosInstance.post(
      "/Declarante/info-declarante",
      declarante,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(`Error al registrar el Conductor: ${error}`);
    throw error;
  }
};

export const sexoRequest = async (token) => {
  try {
    const response = await axiosInstance.get("/Declarante/sexo", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(`Error al obtener los sexos: ${error}`);
    throw error;
  }
}

export const nacionalidadRequest = async (token) => {
  try {
    const response = await axiosInstance.get("/Declarante/nacionalidad", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(`Error al obtener las nacionalidades: ${error}`);
    throw error;
  }
}

export const estadocivilRequest = async (token) => {
  try {
    const response = await axiosInstance.get("/Declarante/estado-civil", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(`Error al obtener las nacionalidades: ${error}`);
    throw error;
  }
}