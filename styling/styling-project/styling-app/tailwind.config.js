const componentsDir = new URL('./components', import.meta.url).pathname;

export default {
  content: [`${componentsDir}/**/*.{js,ts,jsx,tsx}`],
  theme: {
    extend: {},
  },
  plugins: [],
};
