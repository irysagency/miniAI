import type { StylePreset } from '../types';

export const newStyles: StylePreset[] = [
  {
    id: 'vlog',
    name: 'Vlog',
    description: 'Capturing daily life with dynamic transitions...',
    thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=250&fit=crop',
    prompt: 'vlog style youtube thumbnail, energetic, colorful',
  },
  {
    id: 'product-demo',
    name: 'Product Demo',
    description: 'Showcase software features with clean visuals...',
    thumbnail: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=400&h=250&fit=crop',
    prompt: 'product demo thumbnail, clean, professional',
  },
  {
    id: 'talking-head',
    name: 'Talking Head',
    description: 'Direct-to-camera address with high quality...',
    thumbnail: 'https://images.unsplash.com/photo-1589987607627-616cca7ec31d?w=400&h=250&fit=crop',
    prompt: 'talking head youtube thumbnail, presenter, bold text',
  },
  {
    id: 'podcast',
    name: 'Podcast',
    description: 'Multi-camera conversation optimize...',
    thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=250&fit=crop',
    prompt: 'podcast thumbnail, microphone, conversation',
  },
  {
    id: 'gaming',
    name: 'Gaming',
    description: 'High-energy gameplay with overlay...',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop',
    prompt: 'gaming youtube thumbnail, neon, high energy',
  },
  {
    id: 'documentary',
    name: 'Documentary',
    description: 'Cinematic B-roll and narrative-driven...',
    thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=250&fit=crop',
    prompt: 'documentary thumbnail, cinematic, dramatic',
  },
  {
    id: 'tech-review',
    name: 'Tech Review',
    description: 'Detailed close-ups and analytical co...',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop',
    prompt: 'tech review thumbnail, gadget, clean background',
  },
  {
    id: 'educational',
    name: 'Educational',
    description: 'Structured lessons with clear visuals...',
    thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop',
    prompt: 'educational youtube thumbnail, clean, informative',
  },
  {
    id: 'corporate',
    name: 'Corporate',
    description: 'Polished and professional branding f...',
    thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop',
    prompt: 'corporate thumbnail, professional, business',
  },
  {
    id: 'coding-tutorial',
    name: 'Coding Tutorial',
    description: 'Screen-share focus with inset face-cam...',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
    prompt: 'coding tutorial thumbnail, code screen, developer',
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle',
    description: 'Aesthetic-driven visuals and soft pa...',
    thumbnail: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=250&fit=crop',
    prompt: 'lifestyle thumbnail, aesthetic, warm colors',
  },
  {
    id: 'setup-tour',
    name: 'Setup Tour',
    description: 'Smooth transitions between tech ge...',
    thumbnail: 'https://images.unsplash.com/photo-1593640408182-31c228a211bf?w=400&h=250&fit=crop',
    prompt: 'setup tour thumbnail, desk setup, tech',
  },
];

// alias for backwards compat
export { newStyles as predefinedStyles };
