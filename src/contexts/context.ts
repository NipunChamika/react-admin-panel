import { createContext } from "react";

interface UserContextProps {
  editUser: boolean;
  setEditUser: (editUser: boolean) => void;
  isMenuVisible: boolean;
  setMenuVisible: (isMenuVisible: boolean) => void;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);
