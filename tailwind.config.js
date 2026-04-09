/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          main: '#FFFFFF',
          sidebar: '#F8FAFC',
        },
        primary: {
          DEFAULT: '#4F46E5', /* Indigo-600 */
          light: '#EEF2FF', /* Indigo-50 */
        },
        text: {
          dark: '#111827', /* Gray-900 */
          gray: '#6B7280', /* Gray-500 */
          muted: '#9CA3AF', /* Gray-400 */
        },
        border: {
          default: '#E5E7EB', /* Gray-200 */
          primary: '#4F46E5',
        }
      },
      borderRadius: {
        'card-sm': '12px',
        'card-lg': '32px',
        'pill': '9999px',
        'image': '8px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
