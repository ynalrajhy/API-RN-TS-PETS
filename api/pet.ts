import { Pet } from "@/data/pets";
import api from ".";

export const GetAllPets = async () => {
  const response = await api.get("/pets");
  return response.data;
};


export const getPet = async (id: string) => {
  const response = await api.get(`/pets/${id}`);
  return response.data;
};

export const addPet = async (name: string, image: string, type: string, adopted: string) => {
  const response = await api.post("/pets", { name, image, type, adopted });
  return response.data;
};
export const deletePet = async (id: string) => {
  const response = await api.delete(`/pets/${id}`);
  return response.data;
};
 