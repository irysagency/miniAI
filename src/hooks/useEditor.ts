import { useState, useCallback } from 'react';
import type { EditorLayer } from '../types';

interface EditorState {
  fontFamily: string;
  fontSize: number;
  textColor: string;
  bgOpacity: number;
  bgColorOverlay: string;
  creatorPhotoSize: number;
  creatorPhotoPosition: 'left' | 'center' | 'right';
  layers: EditorLayer[];
}

const DEFAULT_LAYERS: EditorLayer[] = [
  { id: 'bg', type: 'background', label: 'Fond', visible: true },
  { id: 'photo', type: 'image', label: 'Photo créateur', visible: true },
  { id: 'title', type: 'text', label: 'Titre', visible: true },
  { id: 'subtitle', type: 'text', label: 'Sous-titre', visible: true },
];

const DEFAULT: EditorState = {
  fontFamily: 'Inter',
  fontSize: 32,
  textColor: '#FFFFFF',
  bgOpacity: 100,
  bgColorOverlay: '#000000',
  creatorPhotoSize: 60,
  creatorPhotoPosition: 'right',
  layers: DEFAULT_LAYERS,
};

export function useEditor() {
  const [state, setState] = useState<EditorState>(DEFAULT);
  const [undoStack, setUndoStack] = useState<EditorState[]>([]);
  const [redoStack, setRedoStack] = useState<EditorState[]>([]);

  const update = useCallback((updates: Partial<EditorState>) => {
    setState(prev => {
      setUndoStack(s => [...s, prev]);
      setRedoStack([]);
      return { ...prev, ...updates };
    });
  }, []);

  const undo = useCallback(() => {
    setUndoStack(s => {
      if (s.length === 0) return s;
      const prev = s[s.length - 1];
      setState(cur => {
        setRedoStack(r => [...r, cur]);
        return prev;
      });
      return s.slice(0, -1);
    });
  }, []);

  const redo = useCallback(() => {
    setRedoStack(s => {
      if (s.length === 0) return s;
      const next = s[s.length - 1];
      setState(cur => {
        setUndoStack(u => [...u, cur]);
        return next;
      });
      return s.slice(0, -1);
    });
  }, []);

  return {
    state,
    update,
    undo,
    redo,
    canUndo: undoStack.length > 0,
    canRedo: redoStack.length > 0,
  };
}
