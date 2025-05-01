module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f3f1fe',
          100: '#e9e4fd',
          200: '#d6cefb',
          300: '#bbadf8',
          400: '#a28df4',
          500: '#7b68ee',
          600: '#6a4de8',
          700: '#5a3ad6',
          800: '#4b32ae',
          900: '#3f2b8e',
          950: '#251a56',
        },
        secondary: {
          50: '#e6feff',
          100: '#cbfcfe',
          200: '#98f8fc',
          300: '#5ff0f7',
          400: '#21e2ee',
          500: '#00ced1',
          600: '#00a8b3',
          700: '#02838d',
          800: '#076973',
          900: '#0b5661',
          950: '#003941',
        },
        accent: {
          50: '#fff8eb',
          100: '#ffecc7',
          200: '#ffd88a',
          300: '#ffbe4d',
          400: '#ffa01f',
          500: '#ff8c00',
          600: '#e66f00',
          700: '#bf5000',
          800: '#9a3f09',
          900: '#7e360d',
          950: '#461a03',
        },
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(var(--color-primary), 0.5)',
        'glow-accent': '0 0 15px rgba(var(--color-accent), 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}