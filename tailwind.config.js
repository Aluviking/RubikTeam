/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Marble base tones
        marble: {
          900: '#0a0a0c',
          800: '#111114',
          700: '#18181c',
          600: '#1f1f24',
          500: '#28282e',
          400: '#3a3a42',
          300: '#52525c',
        },
        // Accent: ruby red (tech)
        ruby: {
          DEFAULT: '#e11d48',
          dim: '#be123c',
          bright: '#fb7185',
          muted: 'rgba(225, 29, 72, 0.15)',
        },
        // Accent: warm white
        white: {
          DEFAULT: '#ffffff',
          soft: '#e4e4e8',
          dim: '#a0a0aa',
          faint: '#6a6a74',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
