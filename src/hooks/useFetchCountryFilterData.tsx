import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import AppContext from "../context/AppContext";

const getData = async (LogOutUser: any) => {
  try {
    const token = localStorage.getItem("talentPOP_ML_App_Token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Add token to Authorization header
      },
    };
    // const url = `${process.env.REACT_APP_BASE_URL}/reports/get_client_names`;
    const url = `${import.meta.env.VITE_BACKEND_BASE_URL}/filters/get-country`;
    const resp = await axios.get(url, config);
    console.log("resp.dataaaaaaaawd", resp?.data);
    return resp.data.data;
  } catch (error: any) {
    console.log("error", error.status);
    if (error.status === 401) {
      console.log("LogOut");
      LogOutUser();
    }
  }
};

export const useFetchCountryFilterData = () => {
  const { LogOutUser } = useContext(AppContext);

  return useQuery({
    queryKey: ["analytics-country-filter"],
    queryFn: () => getData(LogOutUser),
  });
};
