/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,astro}",
    "./node_modules/@skeletonlabs/skeleton/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@skeletonlabs/tw-plugin')],
}
