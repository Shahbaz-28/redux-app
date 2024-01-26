import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../services/store/slices/get_user_slice";

const useGetApi = () => {
  const dispatch = useDispatch();
  const getUserdata = useSelector((state) => state.getReadApi.data);
  console.log("data fromstore to hook", getUserdata);

  const [data, setdata] = useState([]);

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  useEffect(() => {
    setdata(getUserdata);
  }, [getUserdata]);

  return {
    data,
  };
};

export default useGetApi;
