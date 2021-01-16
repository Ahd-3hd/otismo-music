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
  white: string;
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

export interface Page {
  title: string;
  href: string;
}

export interface Music {
  id: string;
  name: string;
  duration: number;
  album_id: string;
  album_name: string;
  artist_id: string;
  artist_name: string;
  license_ccurl: string;
  url: string;
  album_images: string[];
  added_at: string; // Date
}
