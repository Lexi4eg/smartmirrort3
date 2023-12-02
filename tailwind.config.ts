import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx", './app/**/*.tsx','./components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        "nightmode" : "#f70602" ,
      },
      //custom width
        width: {
            '1/7': '14.2857143%',
            '2/7': '28.5714286%',
            '3/7': '42.8571429%',
            '4/7': '57.1428571%',
            '5/7': '71.4285714%',
            '6/7': '85.7142857%',
            '128' : '32rem',
            '144' : '36rem',
        },
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      }
    },
  },
  plugins: [],
} satisfies Config;
