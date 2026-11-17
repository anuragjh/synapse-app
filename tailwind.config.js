/** Tailwind build for the Synapse site. Run: npx tailwindcss@3.4.17 -i src/input.css -o assets/site.css --minify */
module.exports = {
  content: ['./*.html'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        brand: { 50:'#e8fbf4',100:'#c4f3e2',200:'#9ff2d9',300:'#83d6be',400:'#4fbfa1',500:'#1f9f82',600:'#006c5a',700:'#005143',800:'#00382d',900:'#00201a' },
        ink: { 950:'#070a09', 900:'#0b0f0e', 850:'#101614', 800:'#151c1a', 700:'#1f2826', 600:'#2c3633' },
      },
      fontFamily: { sans: ['Inter','system-ui','sans-serif'], mono: ['"JetBrains Mono"','ui-monospace','monospace'] },
    },
  },
}
