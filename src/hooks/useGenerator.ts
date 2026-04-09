import { useState, useCallback } from 'react';
import type { ThumbnailVariant, GeneratorConfig } from '../types';

const MOCK_GRADIENTS = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
];

export function useGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [variants, setVariants] = useState<ThumbnailVariant[]>([]);
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(null);

  const generate = useCallback(async (_config: GeneratorConfig) => {
    setIsGenerating(true);
    setVariants([]);
    await new Promise<void>(r => setTimeout(r, 2000));
    const newVariants: ThumbnailVariant[] = MOCK_GRADIENTS.map((url, i) => ({
      id: `v${i}`,
      url,
      selected: i === 0,
    }));
    setVariants(newVariants);
    setSelectedVariantId('v0');
    setIsGenerating(false);
  }, []);

  const selectVariant = (id: string) => setSelectedVariantId(id);

  const selectedVariant = variants.find(v => v.id === selectedVariantId) ?? null;

  return { isGenerating, variants, selectedVariantId, selectedVariant, generate, selectVariant };
}
