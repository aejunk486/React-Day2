import axios from "./axios";

export const getMembers = async () => {
 
  const response = await axios.get("/member");
  return response.data;
};
