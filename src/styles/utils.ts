import {useMemo} from 'react';
import {Appearance, DimensionValue, StyleSheet} from 'react-native';
import NamedStyles = StyleSheet.NamedStyles;

import {useTheme} from './provider';
import {SpacingDirection, Theme} from './theme';

export type StylesFunction<T> = (theme: Theme) => T | NamedStyles<T>;

export function useStyles<T extends NamedStyles<T> | NamedStyles<any>>(
  styles: StylesFunction<T>,
): T {
  const theme = useTheme();
  return useMemo(() => StyleSheet.create(styles(theme)), [styles, theme]);
}

export function createStyles<T extends NamedStyles<T> | NamedStyles<any>>(
  styles: T | NamedStyles<T>,
): T {
  return StyleSheet.create(styles);
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
      border: theme.colors.background,
      notification: theme.colors.accent,
    },
  };
};

export const getSpacing = (
  property: 'padding' | 'margin',
  spacing: number | undefined,
  spacingDirection?: SpacingDirection,
): any => {
  if (!spacing) return {};
  switch (spacingDirection) {
    case 'horizontal':
      return {
        [`${property}Left`]: spacing,
        [`${property}Right`]: spacing,
      };
    case 'left':
      return {
        [`${property}Left`]: spacing,
      };
    case 'right':
      return {
        [`${property}Right`]: spacing,
      };
    case 'vertical':
      return {
        [`${property}Top`]: spacing,
        [`${property}Bottom`]: spacing,
      };
    case 'top':
      return {
        [`${property}Top`]: spacing,
      };
    case 'bottom':
      return {
        [`${property}Bottom`]: spacing,
      };
    default:
      return {
        [property]: spacing,
      };
  }
};
