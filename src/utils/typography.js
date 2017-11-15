import Typography from "typography";
import { ThemeColors as Colors } from "../components/Theme";

const headerFontFamily = "Open Sans";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.625,
  headerFontFamily: [headerFontFamily, "sans-serif"],
  bodyFontFamily: ["Karma", "serif"],
  includeNormalize: true,
  scaleRatio: 2,
  blockMarginBottom: 1 / 2,
  googleFonts: [
    {
      name: headerFontFamily,
      styles: ["800"]
    },
    {
      name: "Karma",
      styles: ["400", "700"]
    }
  ],
  overrideStyles: ({ rhythm }) => ({
    h1: {
      paddingBottom: `calc(${rhythm(1 / 4)} - 1px)`,
      marginBottom: rhythm(3 / 4),
      marginTop: rhythm(1.5)
    },
    h2: {
      paddingBottom: `calc(${rhythm(1 / 4)} - 1px)`,
      marginBottom: rhythm(1 / 4),
      marginTop: rhythm(1)
    },
    h6: {},
    "h3,h4,h5,h6": {
      marginBottom: rhythm(1 / 2),
      marginTop: rhythm(1)
    },
    "ol,ul": {
      marginLeft: rhythm(1.25)
    },
    // children ol, ul
    "li>ol,li>ul": {
      marginLeft: rhythm(1.25)
    },
    a: {
      color: Colors.indigo,
      textDecoration: "none"
    },
    "a:hover,a:active": {
      textDecoration: "underline"
    },
    blockquote: {
      borderLeft: `4px solid ${Colors.accent}`,
      marginTop: 0,
      marginRight: 0,
      marginLeft: 0,
      paddingLeft: `calc(${rhythm(1 / 2)} - 1px)`
    }
  })
});

export default typography;
