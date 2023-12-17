import { createTheme, style } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    primary: "#0A5C36",
    white: "#fff",
  },
  fontSize: {
    small: "12px",
    medium: "16px",
    large: "20px",
    xLarge: "24px",
  },
});

export const container = style({
  minHeight: "100vh",
  backgroundColor: vars.color.primary,
});

export const Title = style({
  fontSize: vars.fontSize.xLarge,
  color: vars.color.white,
});
