//Librairies
import { create } from 'zustand'

type StatusStore = {
  status: 'win' | 'loose' | 'notSet'
  setStatus: (status: 'win' | 'loose' | 'notSet') => void
}

export const useStatusStore = create<StatusStore>((set) => ({
  status: 'notSet',
  setStatus: (status) => set({ status }),
}))
