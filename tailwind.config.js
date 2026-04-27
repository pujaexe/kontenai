/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      colors: {
        p1: '#6B72FF',
        p2: '#9B8FFF',
        p3: '#C4BDFF',
        blue: { DEFAULT: '#5BAEFF' },
        teal: { DEFAULT: '#54E5D4' },
        rose: { DEFAULT: '#FF7EB3' },
        ink: { DEFAULT: '#0C0B1A', '2': '#2D2B4E' },
        muted: '#7B8AAB',
      },
      borderRadius: {
        card: '20px',
        'card-lg': '28px',
      },
      animation: {
        'fade-down': 'fadeDown 0.6s ease both',
        'fade-up':   'fadeUp 0.7s ease both',
        'float':     'fl 4s ease-in-out infinite',
        'marquee':   'mar 24s linear infinite',
        'twinkle':   'twinkle 3s ease-in-out infinite',
        'cycle-text':'cycleText 4s cubic-bezier(0.4,0,0.2,1) infinite',
      },
    },
  },
  plugins: [],
}
