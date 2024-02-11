import { userState } from "@/types";
import { create } from "zustand";

export const useUser = create<userState>((set) => ({
  myUser: undefined,
  setUser: (user) => set({ myUser: user }),
}));

export const useAllUsers = create((set) => ({
  users: undefined,
  setUsers: (users: any) => set({ users }),
}));
