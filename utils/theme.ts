import { BreakPoints, FontSizes, Space, Theme } from "../types";

export const fontSizes: FontSizes = {
  xs: "10px",
  sm: "12px",
  md: "16px",
  lg: "24px",
  xl: "32px",
};

export const breakpoints: BreakPoints = {
  sm: "600px",
  md: "900px",
  lg: "1200px",
  xl: "1800px",
};

export const spaces: Space = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "32px",
  xl: "48px",
};

export const colors = {
  textPrimary: "#ffffff",
  textSecondary: "#6D6D6D",
  cardBackground: "#ffffff",
  gradientOne: "#12C2E9",
  gradientTwo: "#C471ED",
  gradientThree: "#F64F59",
  blobOne: "#3400C6",
  blobTwo: "#C60000",
  greyOne: "#3B3B3B",
  greyTwo: "#888888",
  greyThree: "#C4C4C4",
  white: "#ffffff",
  black: "#252525",
};

const theme: Theme = {
  colors,
  fontSizes,
  breakpoints,
  spaces,
};

export default theme;
