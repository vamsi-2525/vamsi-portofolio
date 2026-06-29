'use client';
import { create } from 'zustand';

interface UIStore {
  isLoading: boolean;
  isCommandPaletteOpen: boolean;
  activeSection: string;
  cursorVariant: 'default' | 'hover' | 'click';
  setLoading: (v: boolean) => void;
  openCommandPalette: () => void;
  closeCommandPalette: () => void;
  setActiveSection: (section: string) => void;
  setCursorVariant: (v: 'default' | 'hover' | 'click') => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isLoading: true,
  isCommandPaletteOpen: false,
  activeSection: 'hero',
  cursorVariant: 'default',
  setLoading: (v) => set({ isLoading: v }),
  openCommandPalette: () => set({ isCommandPaletteOpen: true }),
  closeCommandPalette: () => set({ isCommandPaletteOpen: false }),
  setActiveSection: (section) => set({ activeSection: section }),
  setCursorVariant: (v) => set({ cursorVariant: v }),
}));
