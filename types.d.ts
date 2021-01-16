export interface Space {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface FontSizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface Colors {
  primary: string;
  secondary: string;
  grey: string;
}

export interface BreakPoints {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface Theme {
  colors: Colors;
  fontSizes: FontSizes;
  breakpoints: BreakPoints;
  spaces: Space;
}
