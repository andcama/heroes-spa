import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthConttext } from "../authorization/context/AuthConttext";

export const PublicRouter = ({ children }) => {
  const { logged } = useContext(AuthConttext);
  return !logged ? children : <Navigate to="/marvel" />;
};