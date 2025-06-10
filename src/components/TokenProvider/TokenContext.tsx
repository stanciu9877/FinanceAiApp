import React, { useContext } from "react";

interface AuthContextType {
  jwtToken: string | null;
  errorMessage: string | null;
  isLoggedIn: string | null;
  clearStoredData: () => void;
  login: (token: string) => void;
}

export const TokenContext = React.createContext<AuthContextType | undefined>(
  undefined
);

export const useTokenContext = () => {
  const ctx = useContext(TokenContext);
  if (!ctx) throw new Error("the auth provider is not found");
  return ctx;
};
