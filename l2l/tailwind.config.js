module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': '#fafafa',
      'light-gray': '#d1d5db',
      'dark-zinc': '#27272a',
      'darker-zinc': '#18181b',
      'black': '#171717',
      'salmon': '#f87171',
      'salmon-two': '#fca5a5',
      'salmon-three': '#fda4af',
    },
    fontFamily: {
      serif: ['Merriweather', 'serif'],
      sans: ['Graphik', 'sans-serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}