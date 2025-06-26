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
