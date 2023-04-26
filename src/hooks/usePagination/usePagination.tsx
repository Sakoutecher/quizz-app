//Librairies
import { create } from 'zustand'

type PaginationStore = {
  currentPage: number
  nextPage: () => void
  previousPage: () => void
  resetPage: () => void
}

export const usePaginationStore = create<PaginationStore>((set) => ({
  currentPage: 0,
  nextPage: () => set((state) => ({ currentPage: state.currentPage + 1 })),
  previousPage: () => set((state) => ({ currentPage: state.currentPage - 1 })),
  resetPage: () => set((state) => ({ currentPage: (state.currentPage = 0) })),
}))
