/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Tinos', '"Times New Roman"', 'serif'],
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: '#004a99',
          deep: '#002f6c',
          light: '#1a5fad',
        },
        gold: {
          DEFAULT: '#FDB913',
          light: '#ffc733',
          dark: '#d49a00',
          muted: 'rgba(253, 185, 19, 0.1)',
        },
        surface: '#f4f7f9',
        'srm-blue': '#004a99',
        'srm-dark': '#002f6c',
        'srm-gold': '#FDB913',
      },
      borderRadius: {
        none: '0',
        sm: '2px',
        DEFAULT: '6px',
        md: '8px',
        lg: '10px',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease',
      },
      fontSize: {
        topbar: ['12px', { lineHeight: '40px' }],
      },
      maxWidth: {
        site: '1320px',
      },
    },
  },
  plugins: [],
};
