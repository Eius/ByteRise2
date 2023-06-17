/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '2rem',
        xl: '8rem',
      }
    },
    fontFamily: {
      "logo": ["vt323", "ui-sans-serif", "system-ui", "-apple-system"],
      "title": ["Figtree", "ui-sans-serif", "system-ui", "-apple-system"],
      "sans": ["Roboto", "ui-sans-serif", "system-ui", "-apple-system"],
    },
    screens: {
      "sm": "596px",
      "md": "768px",
      "lg": "992px",
      "xl": "1200px",
      "xxl": "1400px",
    },
    extend: {},
  },
  daisyui: {
    themes: [
      "night",
      {
        byterise: {
          "primary": "#3abff8",
          "secondary": "#828df8",
          "accent": "#f471b5",
          "neutral": "#1d283a",
          "base-100": "#0f1729",
          "info": "#0ca6e9",
          "success": "#2bd4bd",
          "warning": "#f4c152",
          "error": "#fb6f84",
        }
      }
    ],
  },
  plugins: [require('daisyui')],
}

