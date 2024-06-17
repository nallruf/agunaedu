import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useauth";

const ProtectedRoute = ({ requiredRole }) => {
  const { user, role } = useAuth();

  if (!user) {
    return <Navigate to="/auth/login" />;
  }

  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
