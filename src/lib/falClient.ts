// Typed stub — Gemini API is the primary AI. fal.ai ready when VITE_FAL_KEY is set.
export interface FalGenerateParams {
  prompt: string;
  width: number;
  height: number;
  num_images?: number;
}

export interface FalGenerateResult {
  images: Array<{ url: string }>;
}

export async function generateThumbnailImage(
  _params: FalGenerateParams
): Promise<FalGenerateResult> {
  throw new Error('fal.ai not connected — add VITE_FAL_KEY to .env');
}
