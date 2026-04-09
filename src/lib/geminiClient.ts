import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_KEY
)

export async function buildThumbnailPrompt(
  style: string,
  title: string,
  subtitle: string,
  colors: string[]
): Promise<string> {
  const model = genAI.getGenerativeModel({ 
    model: 'gemini-2.0-flash' 
  })
  const result = await model.generateContent(
    `You are a YouTube thumbnail expert. 
    Generate a Flux Kontext image prompt for a ${style} 
    style thumbnail.
    Video title: "${title}". 
    Subtitle: "${subtitle}". 
    Dominant colors: ${colors.join(', ')}.
    Return only the image generation prompt, max 150 words.`
  )
  return result.response.text()
}
