import { useAuth } from "@/context/AuthContext";
import React from "react";

type AuthSwitchProps = {
  ifAuth: React.ReactNode;
  ifUnauth: React.ReactNode;
};

const AuthSwitch = ({ ifAuth, ifUnauth }: AuthSwitchProps) => {
  const { user } = useAuth();

  return user?.accessToken ? ifAuth : ifUnauth;
};

export default AuthSwitch;
