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
        "rubi-black": "#000000",
        "rubi-dark": "#0D0D12",
        "rubi-gray": "#9898A0",
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
      // Apple-style timing functions
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'apple-in': 'cubic-bezier(0.32, 0, 0.67, 0)',
        'apple-out': 'cubic-bezier(0.33, 1, 0.68, 1)',
        'apple-spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      // Apple-style durations (slower, more considered)
      transitionDuration: {
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
      },
      // Extended spacing for generous whitespace
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      // Apple-style soft shadows
      boxShadow: {
        'apple-sm': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'apple-md': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'apple-lg': '0 10px 40px rgba(0, 0, 0, 0.15)',
        'apple-xl': '0 20px 60px rgba(0, 0, 0, 0.18)',
        'apple-red': '0 10px 40px rgba(230, 0, 35, 0.15)',
      },
      // Refined letter spacing
      letterSpacing: {
        'apple-tight': '-0.02em',
        'apple-normal': '-0.01em',
        'apple-wide': '0.02em',
        'apple-wider': '0.05em',
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
