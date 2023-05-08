/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '.25rem',
        md: '.25rem',
        lg: '2rem',
        xl: '8rem',
        '2xl': '16rem',
      }
    },
    colors: {
      "primary": "#181818",
      "black": "#000000",
      "white": "#F2F2F2",
      "accent": {
        "1": "#F05D23",
      },
      "gray": {
        "100": "#f8f9fa",
        "200": "#e9ecef",
        "300": "#dee2e6",
        "400": "#ced4da",
        "500": "#adb5bd",
        "600": "#6c757d",
        "700": "#495057",
        "800": "#343a40",
        "900": "#212529",
      },
    },
    fontFamily: {
      "logo": ["vt323", "ui-sans-serif", "system-ui", "-apple-system"],
      "mono": ["Roboto Mono", "ui-sans-serif", "system-ui", "-apple-system"],
      "sans": ["Roboto", "ui-sans-serif", "system-ui", "-apple-system"],
      "title": ["Figtree", "ui-sans-serif", "system-ui", "-apple-system"],
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
  plugins: [],
}

