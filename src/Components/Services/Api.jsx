import axios from "axios";
import {API_URL} from "../Constants/Constant";

export const getRecipe = async (searchQuery) => {
  try {
    let response = await axios.get(`${API_URL}/search?q=${searchQuery}`);
    return response.data;
  } catch (error) {
    console.log("Error While Calling the API", error.message);
    return error.response;
  }
};
