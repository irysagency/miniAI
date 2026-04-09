/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        app: {
          main: '#FFFFFF',
          sub: '#F8F9FB',
          canvas: '#F0F0F8',
        },
        accent: {
          primary: '#6366F1',
          hover: '#4F52E0',
          light: 'rgba(99,102,241,0.08)',
        },
        text: {
          primary: '#0F0F14',
          secondary: '#6B6B80',
          muted: '#A0A0B2',
        },
        border: {
          default: '#E8E8EC',
          subtle: '#F0F0F4',
        }
      },
      borderRadius: {
        'card': '12px',
        'input': '8px',
        'pill': '99px',
      },
      boxShadow: {
        'none': 'none',
      },
      transitionTimingFunction: {
        'ease': 'ease',
      },
      transitionDuration: {
        '150': '150ms',
      }
    },
  },
  plugins: [],
}
