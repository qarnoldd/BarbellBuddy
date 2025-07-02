/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}", 
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        RobotoExtraLight:["RobotoExtraLight"],
        RobotoBoldItalic:["RobotoBoldItalic"],
        Roboto_CondensedLight:["Roboto_CondensedLight"],
        Roboto_CondensedMedium:["Roboto_CondensedMedium"],
      }
    },
  },
  plugins: [],
}