import axios from "axios";

import {API_URL} from "../../Constants/Constant";

export const getResults = async ({searchQuery}) => {
  try {
    let response = await axios.get(`${API_URL}/search?q=${searchQuery}`);
    return response.data;
  } catch (error) {
    console.log("err while calling the API", error.msg);
    return error.response;
  }
};
