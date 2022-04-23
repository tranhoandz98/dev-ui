const defaultTheme = require('tailwindcss/defaultTheme');
// const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
  mode: 'jit',
  darkMode: 'class',
  variants: {
    lineClamp: ['responsive', 'hover']
  },
  // prefix: 'tw-',
//   important: true,
}
