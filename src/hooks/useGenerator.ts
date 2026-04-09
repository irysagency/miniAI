import { useState } from 'react';
import type { GeneratorState, ThumbnailVariant } from '../types';
import { predefinedStyles } from '../data/styles';

const initialVariants: ThumbnailVariant[] = [
  { id: 'v1', url: 'linear-gradient(135deg, #E2E8F0 0%, #F1F5F9 100%)', selected: true },
  { id: 'v2', url: 'linear-gradient(135deg, #E2E8F0 0%, #F1F5F9 100%)', selected: false },
  { id: 'v3', url: 'linear-gradient(135deg, #E2E8F0 0%, #F1F5F9 100%)', selected: false },
  { id: 'v4', url: 'linear-gradient(135deg, #E2E8F0 0%, #F1F5F9 100%)', selected: false },
];

export function useGenerator() {
  const [state, setState] = useState<GeneratorState>({
    title: '',
    subtitle: '',
    selectedStyleId: predefinedStyles[0].id,
    selectedColorRef: 'preset1',
    customColorHex: '#6366F1',
    isGenerating: false,
    variants: initialVariants,
  });

  const updateState = (updates: Partial<GeneratorState>) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  const generateThumbnails = async () => {
    updateState({ isGenerating: true });
    // Mock API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Select styling based on selectedStyleId
    const style = predefinedStyles.find(s => s.id === state.selectedStyleId);
    const bgUrl = style ? style.thumbnail : initialVariants[0].url;

    const newVariants = initialVariants.map((v, i) => ({
      ...v,
      url: bgUrl, 
      selected: i === 0
    }));

    updateState({ isGenerating: false, variants: newVariants });
  };

  const selectVariant = (id: string) => {
    updateState({
      variants: state.variants.map(v => ({
        ...v,
        selected: v.id === id
      }))
    });
  };

  return {
    state,
    updateState,
    generateThumbnails,
    selectVariant
  };
}
