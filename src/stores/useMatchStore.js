import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useMatchStore = create(
  persist(
    set => ({
      matches: [],
      addMatch: match => set(state => ({ matches: [...state.matches, match] })), // Agregar un match
      removeMatch: matchId =>
        set(state => ({
          matches: state.matches.filter(match => match.id !== matchId)
        })),
      clearMatches: () => set({ matches: [] })
    }),
    {
      name: 'matches-storage',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
);

export default useMatchStore;
