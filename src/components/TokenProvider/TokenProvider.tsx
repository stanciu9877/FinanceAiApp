import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "./TokenContext";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;
const TIMEOUT_DURATION = 2 * 3600 * 1000; // 2 hours in milliseconds

const getStoredLoginStatus = () => localStorage.getItem("isLoggedIn");
const getStoredToken = () => localStorage.getItem("jwt");
const getStoredExpiry = () => parseInt(localStorage.getItem("jwtExpiry"), 10);

const setToken = (token: string, expiresIn = 3600) => {
  localStorage.setItem("jwt", token);
  localStorage.setItem("jwtExpiry", (Date.now() + expiresIn * 1000).toString());
};

export const TokenProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(getStoredLoginStatus());
  const [jwtToken, setJwtToken] = useState(getStoredToken());
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const hasFetched = useRef(false); // Added guard

  const setLoginStatus = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  };

  const clearStoredData = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("jwt");
    localStorage.removeItem("jwtExpiry");
    setJwtToken(null);
    setIsLoggedIn(false);
    navigate("/");
  };

  const login = useCallback(async () => {
    if (hasFetched.current) return; // Prevent multiple calls
    hasFetched.current = true;

    try {
      const response = await fetch(`${API_BASE_URL}login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(
          `Failed to refresh JWT. HTTP status: ${response.status}`
        );
      }

      const data = await response.json();
      if (!data.jwt_token) {
        throw new Error("Invalid response from backend while refreshing JWT.");
      }

      setJwtToken(data.jwt_token);
      setToken(data.jwt_token, data.expiry);
      setLoginStatus();
      console.log("JWT refreshed successfully.");
    } catch (error) {
      console.error("Error refreshing JWT:", error);
      setErrorMessage("Error refreshing token. Please log in again.");
      clearStoredData();
    }
  }, [clearStoredData]);

  useEffect(() => {
    const jwtExpiry = getStoredExpiry();
    if (!jwtExpiry || !isLoggedIn) return;

    const timeUntilExpiry = jwtExpiry - Date.now();
    const timeUntilTimeout = TIMEOUT_DURATION;

    const handleSessionExpiry = () => {
      alert("Token has expired. Please log in again.");
      clearStoredData();
    };

    if (timeUntilExpiry <= 0) {
      handleSessionExpiry();
      return;
    }

    const minTimeout = Math.min(timeUntilExpiry, timeUntilTimeout);
    const timeoutId = setTimeout(handleSessionExpiry, minTimeout);

    return () => clearTimeout(timeoutId);
  }, [isLoggedIn, clearStoredData]);

  const contextValue = useMemo(
    () => ({
      jwtToken,
      errorMessage,
      isLoggedIn,
      clearStoredData,
      login,
    }),
    [jwtToken, errorMessage, isLoggedIn, clearStoredData, login]
  );

  return (
    <TokenContext.Provider value={contextValue}>
      {children}
    </TokenContext.Provider>
  );
};
