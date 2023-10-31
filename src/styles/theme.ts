export type Theme = {
  isDark: boolean;
  font: {
    family: string;
    size: {
      small: number;
      medium: number;
      large: number;
      jumbo: number;
    };
    weight: {
      light: number;
      regular: number;
      medium: number;
      bold: number;
    };
  };
  spacing: {
    small: number;
    medium: number;
    large: number;
  };
  colors: {
    text: string;
    textInverted: string;
    background: string;
    foreground: string;
    primary: string;
    secondary: string;
    accent: string;
    border: string;
  };
};

const font = {
  family: 'Poppins',
  size: {
    small: 14,
    medium: 16,
    large: 18,
    jumbo: 24,
  },
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
};

const spacing = {
  small: 8,
  medium: 16,
  large: 24,
};

const darkColors = {
  text: '#fff',
  textInverted: '#000',
  background: '#000',
  foreground: '#222222',
  primary: '#007aff',
  secondary: '#242833',
  accent: '#888FA0',
  border: '#e5e5e5',
};

const lightColors = {
  text: '#000',
  textInverted: '#fff',
  background: '#fff',
  foreground: '#eeeeee',
  primary: '#007aff',
  secondary: '#CCD0DB',
  accent: '#5F6677',
  border: '#e5e5e5',
};

export const darkTheme: Theme = {
  isDark: true,
  font,
  spacing,
  colors: darkColors,
};

export const lightTheme: Theme = {
  isDark: false,
  font,
  spacing,
  colors: lightColors,
};
