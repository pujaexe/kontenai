/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['"Google Sans"', 'sans-serif'],
      },
      colors: {
        p1: '#555DFF',
        p2: '#9B8FFF',
        p3: '#C4BDFF',
        blue: { DEFAULT: '#5BAEFF' },
        teal: { DEFAULT: '#54E5D4' },
        rose: { DEFAULT: '#FF7EB3' },
        ink: { DEFAULT: '#0C0B1A', '2': '#2D2B4E' },
        muted: '#5A6987',
      },
      borderRadius: {
        card: '20px',
        'card-lg': '28px',
      },
      boxShadow: {
        'elevate-sm': '0 2px 8px rgba(12, 11, 26, 0.04), 0 1px 2px rgba(12, 11, 26, 0.02)',
        'elevate-md': '0 8px 24px rgba(12, 11, 26, 0.06), 0 2px 8px rgba(12, 11, 26, 0.04)',
        'elevate-lg': '0 16px 40px rgba(12, 11, 26, 0.08), 0 8px 16px rgba(12, 11, 26, 0.04)',
        'glow-p1': '0 12px 40px -8px rgba(85, 93, 255, 0.15), 0 4px 16px -2px rgba(85, 93, 255, 0.1)',
        'glow-teal': '0 12px 40px -8px rgba(84, 229, 212, 0.15), 0 4px 16px -2px rgba(84, 229, 212, 0.1)',
      },
      animation: {
        'fade-down': 'fadeDown 0.6s ease both',
        'fade-up':   'fadeUp 0.7s ease both',
        'float':     'fl 4s ease-in-out infinite',
        'marquee':   'mar 24s linear infinite',
        'twinkle':   'twinkle 3s ease-in-out infinite',
        'cycle-text':'cycleText 4s cubic-bezier(0.4,0,0.2,1) infinite',
        'blob':      'blob 7s infinite',
        'fade-in':   'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
