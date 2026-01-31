import { create } from "zustand";
export interface User {
  id: number;
  name: string;
}
interface AuthState {
  isAuthenticated: boolean;
  token: User | null;
  login: (user: User) => void;
  logout: () => void;
}
export const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    token: null,
    login: (user) => set(() => ({ isAuthenticated: true, token: user })),
    logout: () => set(() => ({ isAuthenticated: false, token: null })),
}));
