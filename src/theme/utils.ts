import lightTheme from './light';
import darkTheme from './dark';
import {Appearance} from 'react-native';

export const getTheme = (theme: 'dark' | 'light') =>
  theme === 'dark' ? darkTheme : lightTheme;

export const setTheme = (theme: 'dark' | 'light' | null) => {
  Appearance.setColorScheme(theme);
};
