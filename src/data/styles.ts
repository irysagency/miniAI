export interface StylePresetData {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
}

export const newStyles: StylePresetData[] = [
  {
    id: 'vlog',
    name: 'Vlog',
    description: 'Capturing daily life with dynamic tra...',
    thumbnail: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)', // Mock gradient representing image
  },
  {
    id: 'product-demo',
    name: 'Product Demo',
    description: 'Showcase software features with cle...',
    thumbnail: 'linear-gradient(135deg, #7F1D1D 0%, #EF4444 100%)',
  },
  {
    id: 'talking-head',
    name: 'Talking Head',
    description: 'Direct-to-camera address with high-...',
    thumbnail: 'linear-gradient(135deg, #4B140B 0%, #B91C1C 100%)',
  },
  {
    id: 'podcast',
    name: 'Podcast',
    description: 'Multi-camera conversation optimize...',
    thumbnail: 'linear-gradient(135deg, #4C1D95 0%, #8B5CF6 100%)',
  },
  {
    id: 'gaming',
    name: 'Gaming',
    description: 'High-energy gameplay with overlay ...',
    thumbnail: 'linear-gradient(135deg, #064E3B 0%, #10B981 100%)',
  },
  {
    id: 'documentary',
    name: 'Documentary',
    description: 'Cinematic B-roll and narrative-driven...',
    thumbnail: 'linear-gradient(135deg, #111827 0%, #374151 100%)',
  },
  {
    id: 'tech-review',
    name: 'Tech Review',
    description: 'Detailed close-ups and analytical co...',
    thumbnail: 'linear-gradient(135deg, #1E40AF 0%, #1D4ED8 100%)',
  },
  {
    id: 'educational',
    name: 'Educational',
    description: 'Structured lessons with clear visuals.',
    thumbnail: 'linear-gradient(135deg, #047857 0%, #10B981 100%)',
  },
  {
    id: 'corporate',
    name: 'Corporate',
    description: 'Polished and professional branding f...',
    thumbnail: 'linear-gradient(135deg, #374151 0%, #9CA3AF 100%)',
  },
  {
    id: 'coding-tutorial',
    name: 'Coding Tutorial',
    description: 'Screen-share focus with inset face-...',
    thumbnail: 'linear-gradient(135deg, #1F2937 0%, #4B5563 100%)',
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle',
    description: 'Aesthetic-driven visuals and soft pa...',
    thumbnail: 'linear-gradient(135deg, #065F46 0%, #059669 100%)',
  },
  {
    id: 'setup-tour',
    name: 'Setup Tour',
    description: 'Smooth transitions between tech ge...',
    thumbnail: 'linear-gradient(135deg, #111827 0%, #1F2937 100%)',
  }
];
