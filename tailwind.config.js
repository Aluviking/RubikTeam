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
        primary: {
          blue: '#1E90FF',
          purple: '#7B3FE4',
          green: '#00FF88',
        },
        accent: {
          orange: '#FF6B35',
          red: '#FF3366',
        },
        neutral: {
          dark: '#000000',
          gray: '#4B4B4B',
          light: '#FFFFFF',
        },
        "rubi-red": "#E60023",
        "rubi-crimson": "#990011",
        "rubi-black": "#050507",
        "rubi-dark": "#0F0F12",
        "rubi-gray": "#88888F",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        logo: ['Space Grotesk', 'Rajdhani', 'Orbitron', 'sans-serif'],
      },
      fontSize: {
        'description': '16px',
        'heading': '18px',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'noise': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
      },
      animation: {
        'float': 'float 10s ease-in-out infinite',
        'rotate-slow': 'rotate 30s linear infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-cube': 'spin-cube 20s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'scan': 'scan 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-cube': {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '100%': { transform: 'rotateX(360deg) rotateY(360deg)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        scan: {
          '0%': { top: '-100%' },
          '100%': { top: '200%' },
        }
      },
    },
  },
  plugins: [],
}
