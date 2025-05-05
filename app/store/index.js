import { create } from 'zustand'

 const useMenu = create(set => ({
	isOpen: false,
	setIsOpen: () => set(state => ({ isOpen: !state.isOpen })),
}))

export default useMenu