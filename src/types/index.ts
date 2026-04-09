export type StudioStep = 1 | 2 | 3 | 'editor';

export interface StylePreset {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  prompt: string;
}

export interface Persona {
  id: string;
  name: string;
  avatarUrl: string;
  photoCount: number;
  createdAt: string;
}

export interface ThumbnailVariant {
  id: string;
  url: string;
  selected: boolean;
}

export interface HistoryItem {
  id: string;
  title: string;
  styleId: string;
  styleName: string;
  thumbnailUrl: string;
  createdAt: string;
}

export interface EditorLayer {
  id: string;
  type: 'text' | 'image' | 'background';
  label: string;
  visible: boolean;
}

export interface GeneratorConfig {
  title: string;
  subtitle: string;
  selectedStyleId: string | null;
  selectedPersonaId: string | null;
  backgroundMode: 'ai' | 'upload';
  colorPreset: 'preset1' | 'preset2' | 'preset3' | 'custom';
  customColorHex: string;
}
