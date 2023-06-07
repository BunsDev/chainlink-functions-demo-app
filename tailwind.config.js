/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: '30em',
        mobile: '48em',
        laptop: '62em',
        desktop: '80em',
        'desktop-lg': '96em',
      },
      fontSize: {
        'heading-4xl': '72px',
        'heading-3xl': '60px',
        'heading-2xl': '48px',
        'heading-xl': '36px',
        'heading-lg': '30px',
        'heading-small-lg': '24px',
        'heading-md': '20px',
        'heading-sm': '16px',
        'heading-xs': '14px',
        'text-6xl': '60px',
        'text-5xl': '48px',
        'text-4xl': '36px',
        'text-3xl': '30px',
        'text-2xl': '24px',
        'text-xl': '20px',
        'text-lg': '18px',
        'text-md': '16px',
        'text-sm': '14px',
        'text-xs': '12px',
      },
      colors: {
        'white-alpha-50': 'rgba(255, 255, 255, 0.04)',
        'white-alpha-100': 'rgba(255, 255, 255, 0.06)',
        'white-alpha-200': 'rgba(255, 255, 255, 0.08)',
        'white-alpha-300': 'rgba(255, 255, 255, 0.16)',
        'white-alpha-400': 'rgba(255, 255, 255, 0.24)',
        'white-alpha-500': 'rgba(255, 255, 255, 0.36)',
        'white-alpha-600': 'rgba(255, 255, 255, 0.48)',
        'white-alpha-700': 'rgba(255, 255, 255, 0.64)',
        'white-alpha-800': 'rgba(255, 255, 255, 0.8)',
        'white-alpha-900': 'rgba(255, 255, 255, 0.92)',
        'black-alpha-50': 'rgba(0, 0, 0, 0.04)',
        'black-alpha-100': 'rgba(0, 0, 0, 0.06)',
        'black-alpha-200': 'rgba(0, 0, 0, 0.08)',
        'black-alpha-300': 'rgba(0, 0, 0, 0.16)',
        'black-alpha-400': 'rgba(0, 0, 0, 0.24)',
        'black-alpha-500': 'rgba(0, 0, 0, 0.36)',
        'black-alpha-600': 'rgba(0, 0, 0, 0.48)',
        'black-alpha-700': 'rgba(0, 0, 0, 0.64)',
        'black-alpha-800': 'rgba(0, 0, 0, 0.8)',
        'black-alpha-900': 'rgba(0, 0, 0, 0.92)',
        'gray-50': 'rgba(247, 250, 252, 1)',
        'gray-100': 'rgba(237, 242, 247, 1)',
        'gray-200': 'rgba(226, 232, 240, 1)',
        'gray-300': 'rgba(203, 213, 224, 1)',
        'gray-400': 'rgba(160, 174, 192, 1)',
        'gray-500': 'rgba(113, 128, 150, 1)',
        'gray-600': 'rgba(74, 85, 104, 1)',
        'gray-700': 'rgba(45, 55, 72, 1)',
        'gray-800': 'rgba(26, 32, 44, 1)',
        'gray-900': 'rgba(23, 25, 35, 1)',
        'red-50': 'rgba(255, 245, 245, 1)',
        'red-100': 'rgba(254, 215, 215, 1)',
        'red-200': 'rgba(254, 178, 178, 1)',
        'red-300': 'rgba(252, 129, 129, 1)',
        'red-400': 'rgba(245, 101, 101, 1)',
        'red-500': 'rgba(229, 62, 62, 1)',
        'red-600': 'rgba(197, 48, 48, 1)',
        'red-700': 'rgba(155, 44, 44, 1)',
        'red-800': 'rgba(130, 39, 39, 1)',
        'red-900': 'rgba(99, 23, 27, 1)',
        'green-50': 'rgba(240, 255, 244, 1)',
        'green-100': 'rgba(198, 246, 213, 1)',
        'green-200': 'rgba(154, 230, 180, 1)',
        'green-300': 'rgba(104, 211, 145, 1)',
        'green-400': 'rgba(72, 187, 120, 1)',
        'green-500': 'rgba(56, 161, 105, 1)',
        'green-600': 'rgba(37, 133, 90, 1)',
        'green-700': 'rgba(39, 103, 73, 1)',
        'green-800': 'rgba(34, 84, 61, 1)',
        'green-900': 'rgba(28, 69, 50, 1)',
        'blue-50': 'rgba(235, 248, 255, 1)',
        'blue-100': 'rgba(190, 227, 248, 1)',
        'blue-200': 'rgba(144, 205, 244, 1)',
        'blue-300': 'rgba(99, 179, 237, 1)',
        'blue-400': 'rgba(66, 153, 225, 1)',
        'blue-500': 'rgba(49, 130, 206, 1)',
        'blue-600': 'rgba(43, 108, 176, 1)',
        'blue-700': 'rgba(44, 82, 130, 1)',
        'blue-800': 'rgba(42, 67, 101, 1)',
        'blue-900': 'rgba(26, 54, 93, 1)',
        'purple-200': 'rgba(183, 148, 244, 1)',
        'purple-300': 'rgba(159, 122, 234, 1)',
      },
      backgroundImage: {
        'green-gradient':
          'linear-gradient(180deg, rgba(60, 139, 236, 0.2) 0%, rgba(168, 245, 220, 0.2) 100%)',
        'blue-gradient':
          'linear-gradient(123.77deg, rgba(197, 100, 237, 0.2) -2.01%, rgba(89, 212, 237, 0.2) 102.02%)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
