export interface StylePreset {
  id: string;
  name: string;
  prompt: string;
  thumbnail: string;
}

export interface ThumbnailVariant {
  id: string;
  url: string;
  selected: boolean;
}

export interface GeneratorState {
  title: string;
  subtitle: string;
  selectedStyleId: string | null;
  selectedColorRef: 'preset1' | 'preset2' | 'preset3' | 'custom';
  customColorHex: string;
  isGenerating: boolean;
  variants: ThumbnailVariant[];
}
