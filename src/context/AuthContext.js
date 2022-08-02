import { getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import nookies from "nookies";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  user: null,
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const auth = getAuth(getApp());

  useEffect(() => {
    if (typeof window !== "undefined") { 
      window.nookies = nookies;
    }
    return auth.onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        nookies.destroy(null, "__session");
        nookies.set(null, "__session", "", { path: "/" });
        return;
      }

      const token = await user.getIdToken();
      setUser(user);
      nookies.set(null, "__session", token, { path: "/" });
    });
  }, [auth]);

  // force refresh the token every 10 minutes
  useEffect(() => {
    const handle = setInterval(async () => {
      const user = auth.currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);
    return () => clearInterval(handle);
  }, [auth]);

  return (
    <AuthContext.Provider value={{ user }}> {children} </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
