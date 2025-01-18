import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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
      name: 'matches-storage'
    }
  )
);

export default useMatchStore;
