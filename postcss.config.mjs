/**
 * PostCSS configuration
 * Handles Tailwind CSS and vendor prefixing
 * Custom tweaks for better compatibility across browsers
 * 
 * @type {import('postcss-load-config').Config}
 */
const config = {
  plugins: {
    "tailwindcss/nesting": {},  // Enables nested CSS like Sass
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: ["last 2 versions", ">1%"],
    },
  },
};

export default config;
