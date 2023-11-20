import {Theme} from '@styles';

const baseTheme: Omit<Theme, 'colors' | 'isDark'> = {
  font: {
    family: 'Poppins',
    size: {
      small: 14,
      medium: 18,
      large: 24,
      jumbo: 32,
    },
    weight: {
      light: '300',
      regular: '400',
      medium: '500',
      bold: '700',
    },
  },
  spacing: {
    none: 0,
    small: 8,
    medium: 16,
    large: 32,
  },
};

export const darkTheme: Theme = {
  ...baseTheme,
  isDark: true,
  colors: {
    text: '#fff',
    textInverse: '#000',
    background: '#000',
    foreground: '#222222',
    primary: '#007aff',
    secondary: '#242833',
    accent: '#888FA0',
    border: '#e5e5e5',
    facebook: '#1877F2',
    google: '#DB4437',
    apple: '#888FA0',
    attention: '',
    toned: '',
    success: '',
    warning: '',
    error: '',
    info: '',
  },
};

export const lightTheme: Theme = {
  ...baseTheme,
  isDark: false,
  colors: {
    text: '#000',
    textInverse: '#fff',
    background: '#fff',
    foreground: '#eeeeee',
    primary: '#007aff',
    secondary: '#CCD0DB',
    accent: '#5F6677',
    border: '#e5e5e5',
    facebook: '#1877F2',
    google: '#DB4437',
    apple: '#888FA0',
    attention: '',
    toned: '',
    success: '',
    warning: '',
    error: '',
    info: '',
  },
};
