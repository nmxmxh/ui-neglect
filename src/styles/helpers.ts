// import type { Colors } from "./styled";
import type { FONT_SIZES, FONT_WEIGHTS, FONTS, RADIUS, SHADOWS } from "./themes";

export const createCssProps = <T extends object>(tokenObj: T, prefix: string) => {
  return (
    Object.entries(tokenObj)
      .map(([key, value]) => {
        const variableKey = prefix === "--" ? `${prefix}${key}` : `${prefix}-${key}`;
        return `${variableKey}: ${value}`;
      })
      .join(";") + ";"
  );
};

/**
 * Create a CSS custom property string for a color.
 * @param n - The name of a color;
 * @returns A string which is also a CSS custom property for this color.
 */
// export const color = (key: keyof Colors) => {
//   return `var(--color-${key})`;
// };

/**
 * Create a CSS custom property string for a font-family.
 * @param key The name of a font-family express;
 * @returns A string which is also a CSS custom property for this font-family.
 */
export const font = (key: keyof typeof FONTS) => {
  return `var(--ff-${key})`;
};

/**
 * Create a CSS custom property string for a font-size.
 * @param key The name of a font-size express;
 * @returns A string which is also a CSS custom property for this font-size.
 */
export const fontSize = (key: keyof typeof FONT_SIZES) => {
  return `var(--fs-${key})`;
};

/**
 * Create a CSS custom property string for a font-weight.
 * @param key The name of a font-weight express;
 * @returns A string which is also a CSS custom property for this font-weight.
 */
export const fontWeight = (key: keyof typeof FONT_WEIGHTS) => {
  return `var(--fw-${key})`;
};

/**
 * Create a CSS custom property string for a size.
 * @param key The name of a size express;
 * @returns A string which is also a CSS custom property for this size.
 */

/**
 * Create a CSS custom property string for a radius.
 * @param key The name of a radius express;
 * @returns A string which is also a CSS custom property for this radius.
 */
export const radius = (key: keyof typeof RADIUS) => {
  return `var(--radius-${key})`;
};

/**
 * Create a CSS custom property string for a shadow.
 * @param key The name of a shadow express;
 * @returns A string which is also a CSS custom property for this shadow.
 */
export const shadow = (key: keyof typeof SHADOWS) => {
  return `var(--shadow-${key})`;
};
