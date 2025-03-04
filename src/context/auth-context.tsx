import React, { createContext, use, useState } from "react";

type AuthContextType = {
  user: string;
  email: string;
};

const AuthContext = createContext<AuthContextType>({ user: "", email: "" });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [value] = useState<AuthContextType>({
    user: "nazim",
    email: "",
  });
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => use(AuthContext);
