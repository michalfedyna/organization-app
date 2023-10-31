import {Appearance, StyleSheet} from 'react-native';
import {useTheme} from './provider';
import {Theme} from './theme';
import NamedStyles = StyleSheet.NamedStyles;

export type StylesFunction<T> = (theme: Theme) => T | NamedStyles<T>;

export function useStyles<T extends NamedStyles<T> | NamedStyles<any>>(
  styles: StylesFunction<T>,
): T {
  const theme = useTheme();
  return StyleSheet.create(styles(theme));
}

export const setTheme = (theme: 'dark' | 'light' | null) => {
  Appearance.setColorScheme(theme);
};

export const getTheme = () => {
  const colorScheme = Appearance.getColorScheme();

  if (colorScheme === 'dark') return 'dark';

  return 'light';
};

export {useTheme};
