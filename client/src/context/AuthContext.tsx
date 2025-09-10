import type { User } from "@/lib/types";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext<{
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
} | null>(null);

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = useState<null | User>(null); // null if not logged in

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const auth = useContext(AuthContext);
  if (auth === null)
    throw new Error("Cannot use 'useAuth' outside '<AuthProvider>'");
  return auth;
};
