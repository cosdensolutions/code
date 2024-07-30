import { GetUsersFilters } from '@/api/user';
import { User } from '@/types/user';
import { create } from 'zustand';

type UserStore = {
  filters?: GetUsersFilters;
  setFilters: (filters?: GetUsersFilters) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  filters: undefined,
  setFilters: (filters) => set({ filters }),
}));
