import { createContext } from "react";

interface UserContextProps {
  editUser: boolean;
  setEditUser: (editUser: boolean) => void;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);
