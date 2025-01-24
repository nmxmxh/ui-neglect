import type { DefaultTheme } from "styled-components";

export const RADIUS = {
  md: "8px",
  lg: "12px",
};

export const FONTS = {
  "helvetica-neue": "Helvetica Neue",
  roboto: "Roboto",
};

export const FONT_SIZES = {
  lg: ``,
  md: ``,
  sm: ``,
};

export const FONT_WEIGHTS = {
  regular: 400,
  bold: 700,
};

export const SHADOWS = {
  sm: "black-60%",
};

export const lightTheme: DefaultTheme = {
  colors: {
    "primary-grey-600": "#292929",
    "primary-grey-500": "#343434",
    "primary-grey-400": "#525252",
    "primary-grey-300": "#9D9D9D",
    "primary-grey-200": "#CBCBCB",
    "primary-grey-100": "#F4F4F2",
    "secondary-black": "#111111",
    "secondary-white": "#FFFFFF",
    "ppp-bright-red": "#895757",
    "ppp-light-red": "#6B4C4C",
    "ppp-medium-red": "#574141",
    "ppp-dark-red": "#403535",
    "ppp-sdr": "#312B2B",
    "ppp-bright-green": "#607748",
    "ppp-light-green": "#4E5A43",
    "ppp-medium-green": "#41493A",
    "ppp-sdg": "#2C3029",
    "ppp-bright-blue": "#4B6D8C",
    "ppp-light-blue": "#45525F",
    "ppp-medium-blue": "#3D4752",
    "ppp-dark-blue": "#353E477",
    "ppp-sdb": "#353C41",
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    "primary-grey-600": "#292929",
    "primary-grey-500": "#343434",
    "primary-grey-400": "#525252",
    "primary-grey-300": "#9D9D9D",
    "primary-grey-200": "#CBCBCB",
    "primary-grey-100": "#F4F4F2",
    "secondary-black": "#111111",
    "secondary-white": "#FFFFFF",
    "ppp-bright-red": "#895757",
    "ppp-light-red": "#6B4C4C",
    "ppp-medium-red": "#574141",
    "ppp-dark-red": "#403535",
    "ppp-sdr": "#312B2B",
    "ppp-bright-green": "#607748",
    "ppp-light-green": "#4E5A43",
    "ppp-medium-green": "#41493A",
    "ppp-sdg": "#2C3029",
    "ppp-bright-blue": "#4B6D8C",
    "ppp-light-blue": "#45525F",
    "ppp-medium-blue": "#3D4752",
    "ppp-dark-blue": "#353E477",
    "ppp-sdb": "#353C41",
  },
};

export const BREAKPOINTS = {
  tabletMax: 864,
};

export const QUERIES = {
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
};
