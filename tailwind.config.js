/** Tailwind build for the Synapse site. Run: python3 src/build.py */
module.exports = {
  content: ['./*.html', './src/pages/*.html'],
  theme: {
    extend: {
      colors: {
        brand: { 50:'#ecf8f4',100:'#d3efe6',200:'#9ff2d9',300:'#7ee8c8',400:'#3fbf9c',500:'#119679',600:'#0e7c66',700:'#006c5a',800:'#07463a',900:'#00201a' },
        night: { 950:'#080c0b', 900:'#0e1412', 800:'#151d1a', 700:'#1f2a26', 600:'#2c3833' },
        line: '#e4ebe8',
        muted: '#5d6b66',
      },
      fontFamily: { sans: ['Inter','system-ui','sans-serif'], display: ['"Inter Tight"','Inter','system-ui','sans-serif'], mono: ['"JetBrains Mono"','ui-monospace','monospace'] },
    },
  },
}
