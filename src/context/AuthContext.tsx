import React, { createContext } from "react";
import { get, post } from "@/hooks/useAxios";

export type AuthContextType = {
  authToken: string;
  login: () => void;
  logout: () => void;
};

const initialValues: AuthContextType = {
  authToken: "",
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext<AuthContextType>(initialValues);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [authToken, setAuthToken] = React.useState<string>("");
  const login = () => {};
  const logout = () => {};
  return (
    <AuthContext.Provider value={{ authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
