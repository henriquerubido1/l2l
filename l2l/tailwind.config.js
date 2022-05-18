module.exports = {
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
      'salmon2': '#fca5a5',
      'salmon3': '#fda4af',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
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