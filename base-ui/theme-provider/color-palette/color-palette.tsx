import colors from './color-palette.module.css';

export interface ColorPalette {
  primary: string;
  danger: string;
  success: string;
}

export const colorPalette: ColorPalette = {
  primary: colors.primary,
  danger: colors.danger,
  success: colors.success,
};
