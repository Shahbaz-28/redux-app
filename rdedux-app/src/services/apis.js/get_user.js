import axios from "axios";
import React from "react";
import { CONSTANT } from "../app.config";

const getApi = async () => {
  try {
    const response = await axios.get(CONSTANT.API_BASE_URL);
    console.log("data in api", response.data);
    return response.data;
  } catch (eror) {
    console.log("error", eror);
  }
};

export default getApi;
