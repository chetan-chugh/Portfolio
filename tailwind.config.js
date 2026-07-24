/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Primary: Inter for all display + body text (single-family hierarchy)
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        // Monospace: Fira Code for labels, badges, stat numbers
        mono:    ['"Fira Code"', 'monospace'],
        // Legacy aliases — keeps existing className references working
        syne: ['Inter', 'system-ui', 'sans-serif'],
        dm:   ['Inter', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        // ── Display: hero name only. Tight leading, heavy tracking compression.
        'display': ['clamp(56px, 8vw, 96px)', { lineHeight: '0.94', letterSpacing: '-0.045em', fontWeight: '800' }],

        // ── Headings: section titles. Slightly looser than display.
        'h1': ['clamp(42px, 5.5vw, 68px)', { lineHeight: '1.0',  letterSpacing: '-0.04em',  fontWeight: '700' }],
        'h2': ['clamp(30px, 3.5vw, 46px)', { lineHeight: '1.06', letterSpacing: '-0.035em', fontWeight: '700' }],
        'h3': ['22px',                      { lineHeight: '1.3',  letterSpacing: '-0.025em', fontWeight: '600' }],
        'h4': ['17px',                      { lineHeight: '1.4',  letterSpacing: '-0.015em', fontWeight: '600' }],

        // ── Body: generous leading. No letter-spacing on body — Inter is
        //    already optically spaced. Adding tracking hurts readability.
        'body-xl': ['19px', { lineHeight: '1.85', letterSpacing: '0',      fontWeight: '300' }],
        'body-lg': ['17px', { lineHeight: '1.8',  letterSpacing: '0',      fontWeight: '300' }],
        'body':    ['15px', { lineHeight: '1.75', letterSpacing: '0',      fontWeight: '400' }],
        'body-sm': ['13px', { lineHeight: '1.7',  letterSpacing: '0',      fontWeight: '400' }],

        // ── Labels: Fira Code. Uppercase + wider tracking for small text.
        'label':   ['10px', { lineHeight: '1.4', letterSpacing: '0.1em',  fontWeight: '500' }],
        'caption': ['12px', { lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: '400' }],
      },

      fontWeight: {
        'light':     '300',  // body descriptions on dark bg
        'normal':    '400',  // nav, card body
        'medium':    '500',  // buttons, sub-labels
        'semibold':  '600',  // H3, H4, section sub-titles
        'bold':      '700',  // H2, section titles
        'extrabold': '800',  // H1, hero name, display
      },

      lineHeight: {
        'tighter': '0.92',
        'tight':   '1.05',
        'snug':    '1.25',
        'normal':  '1.5',
        'relaxed': '1.75',
        'loose':   '1.85',
      },

      letterSpacing: {
        'display': '-0.045em',
        'heading': '-0.035em',
        'tight':   '-0.02em',
        'normal':  '0',
        'label':   '0.1em',
        'wide':    '0.06em',
      },

      // Reading measure — max line lengths for body text
      maxWidth: {
        'prose-sm': '48ch',  // captions, card descriptions
        'prose':    '62ch',  // standard body paragraphs
        'prose-lg': '72ch',  // wide layout text
      },

      colors: {
        bg: {
          DEFAULT: '#080810',
          2:    '#0D0D18',
          3:    '#12121E',
          card: '#0F0F1A',
        },
        accent: {
          DEFAULT: '#4F6EF7',
          2: '#7C3AED',
          3: '#06B6D4',
        },
        brand: { green: '#10B981' },
        ink: {
          DEFAULT: '#EEEEF8',
          2: '#8888A8',
          3: '#44445A',
        },
        line: {
          DEFAULT: '#1A1A2E',
          2:       '#222236',
        },
      },
    },
  },
  plugins: [],
}