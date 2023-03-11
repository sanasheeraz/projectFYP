import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const Private_Routes = () => {
  const { user_auth } = useSelector((state) => state.user_auth);
  return !user_auth ? <Outlet /> : <Navigate to="/" />;
};
