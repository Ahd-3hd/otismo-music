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

/**
 * text secondary
 * text primary
 * background: cards, input fields
 * cards background: cards overlay
 * blobs background: primary:3400C6, secondary:C60000
 * background gradient: blue 12C2E9, purple C471ED, red F64F59
 * grey 1
 * grey 2
 * grey 3
 *
 *
 *
 */

export interface Colors {
  textPrimary: string;
  textSecondary: string;
  cardBackground: string;
  gradientOne: string;
  gradientTwo: string;
  gradientThree: string;
  blobOne: string;
  blobTwo: string;
  greyOne: string;
  greyTwo: string;
  greyThree: string;
  white: string;
  black: string;
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

export interface Album {
  id: string;
  name: string;
  artist_id: string;
  images: string[];
  added_at: string; // Date
}

export interface Artist {
  id: string;
  name: string;
}

export interface GetArtistResponse {
  musics: Music[];
  albums: Album[];
  artist: Artist;
}
