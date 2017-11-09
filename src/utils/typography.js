import Typography from "typography";

const headerFontFamily = "Open Sans";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [headerFontFamily, "sans-serif"],
  bodyFontFamily: ["Karma", "serif"],
  includeNormalize: true,
  googleFonts: [
    {
      name: headerFontFamily,
      styles: ["800"]
    },
    {
      name: "Karma",
      styles: ["400", "700"]
    }
  ]
});

export default typography;
