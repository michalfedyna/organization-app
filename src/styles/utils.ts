import {useMemo} from 'react';
import {Appearance, FlexStyle, StyleSheet} from 'react-native';
import NamedStyles = StyleSheet.NamedStyles;

import {useTheme} from './provider';
import {
  Colors,
  FontSize,
  FontWeight,
  Spacing,
  SpacingDirection,
  Theme,
} from './theme';

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

export type SpacingProps = {
  margin?: keyof Spacing;
  marginDirection?: SpacingDirection;
  padding?: keyof Spacing;
  paddingDirection?: SpacingDirection;
  align?: 'center' | 'start' | 'end';
};

export type FontProps = {
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  fontColor?: keyof Colors;
};

export const getPadding = (
  padding: number | undefined,
  paddingDirection?: SpacingDirection,
): Pick<
  FlexStyle,
  | 'padding'
  | 'paddingHorizontal'
  | 'paddingVertical'
  | 'paddingTop'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'paddingRight'
> => {
  if (!padding) return {};
  switch (paddingDirection) {
    case 'horizontal':
      return {paddingHorizontal: padding};
    case 'vertical':
      return {paddingVertical: padding};
    case 'top':
      return {paddingTop: padding};
    case 'bottom':
      return {paddingBottom: padding};
    case 'left':
      return {paddingLeft: padding};
    case 'right':
      return {paddingRight: padding};
    default:
      return {padding: padding};
  }
};

export const getMargin = (
  margin: number | undefined,
  marginDirection?: SpacingDirection,
): Pick<
  FlexStyle,
  | 'margin'
  | 'marginHorizontal'
  | 'marginVertical'
  | 'marginTop'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginRight'
> => {
  if (!margin) return {};
  switch (marginDirection) {
    case 'horizontal':
      return {marginHorizontal: margin};
    case 'vertical':
      return {marginVertical: margin};
    case 'top':
      return {marginTop: margin};
    case 'bottom':
      return {marginBottom: margin};
    case 'left':
      return {marginLeft: margin};
    case 'right':
      return {marginRight: margin};
    default:
      return {margin: margin};
  }
};

export const getAlign = (
  align: 'center' | 'start' | 'end',
): Pick<FlexStyle, 'alignSelf'> => {
  switch (align) {
    case 'start':
      return {alignSelf: 'flex-start'};
    case 'end':
      return {alignSelf: 'flex-end'};
    default:
      return {alignSelf: align};
  }
};
