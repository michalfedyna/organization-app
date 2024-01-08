import {useTheme} from './provider';
import {Theme} from './types';
import {useMemo} from 'react';
import {Appearance, StyleSheet} from 'react-native';

export function useStyles<T extends StyleSheet.NamedStyles<T>>(
  styles:
    | T
    | StyleSheet.NamedStyles<T>
    | ((theme: Theme) => T)
    | ((theme: Theme) => StyleSheet.NamedStyles<T>),
): Readonly<T> {
  const theme = useTheme();

  return useMemo(
    () =>
      StyleSheet.create(typeof styles === 'function' ? styles(theme) : styles),
    [styles, theme],
  );
}

export const setTheme = (theme: 'dark' | 'light' | null) => {
  Appearance.setColorScheme(theme);
};

export const useNavigationTheme = () => {
  const {isDark, ...theme} = useTheme();
  return {
    dark: isDark,
    colors: {
      primary: theme.colors.primary,
      background: theme.colors.background,
      card: theme.colors.foreground,
      text: theme.colors.text,
      border: theme.colors.border,
      notification: theme.colors.attention,
    },
  };
};
