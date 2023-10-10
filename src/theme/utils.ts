import lightTheme from './light';
import darkTheme from './dark';

export const getTheme = (theme: 'dark' | 'light') =>
  theme === 'dark' ? darkTheme : lightTheme;
