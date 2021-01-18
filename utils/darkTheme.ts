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
  primary: "#0F2027",
  secondary: "#203A43",
  tertiary: "#2C5364",
  grey: "#F5F5F5",
  background: "#2c3e50",
  text: "#ffffff",
};

const darkTheme: Theme = {
  colors,
  fontSizes,
  breakpoints,
  spaces,
};

export default darkTheme;
