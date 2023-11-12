import {useTheme} from './provider';
import {
  AlignStyle,
  BackgroundStyle,
  BorderStyle,
  ColorTheme,
  FontStyle,
  FontTheme,
  KeyofColorTheme,
  KeyofFontSizeTheme,
  MarginStyle,
  PaddingStyle,
  SizeStyle,
  SpacingStyle,
  SpacingTheme,
  Theme,
  ViewStyle,
} from './types';
import {useMemo} from 'react';
import {Appearance, Platform, StyleSheet} from 'react-native';

import type {
  AlignProps,
  BackgroundProps,
  BorderProps,
  FontProps,
  MarginProps,
  PaddingProps,
  SizeProps,
  SpacingProps,
  ViewProps,
} from '@types';

import NamedStyles = StyleSheet.NamedStyles;

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

// Style utils

const marginProperties: (keyof MarginStyle)[] = [
  'margin',
  'marginHorizontal',
  'marginVertical',
  'marginTop',
  'marginBottom',
  'marginLeft',
  'marginRight',
];

const paddingProperties: (keyof PaddingStyle)[] = [
  'padding',
  'paddingHorizontal',
  'paddingVertical',
  'paddingTop',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
];

const spacingProperties: (keyof SpacingStyle)[] = [
  ...marginProperties,
  ...paddingProperties,
];

export const getSpacing = (
  args: SpacingProps,
  spacingTheme: SpacingTheme,
): SpacingStyle => {
  let spacing: SpacingStyle = {};

  for (const property of spacingProperties) {
    const arg = args[property];
    if (arg !== undefined) {
      spacing[property] = spacingTheme[arg];
    }
  }
  return spacing;
};

export const getMargin = (
  args: MarginProps,
  spacingTheme: SpacingTheme,
): MarginStyle => {
  let margin: MarginStyle = {};

  for (const property of marginProperties) {
    const arg = args[property];
    if (arg !== undefined) {
      margin[property] = spacingTheme[arg];
    }
  }
  return margin;
};

export const getPadding = (
  args: PaddingProps,
  spacingTheme: SpacingTheme,
): PaddingStyle => {
  let padding: PaddingStyle = {};

  for (const property of paddingProperties) {
    const arg = args[property];
    if (arg !== undefined) {
      padding[property] = spacingTheme[arg];
    }
  }
  return padding;
};

export const getAlign = (args: AlignProps): AlignStyle => {
  switch (args.align) {
    case 'start':
      return {alignSelf: 'flex-start'};
    case 'end':
      return {alignSelf: 'flex-end'};
    default:
      return {alignSelf: 'center'};
  }
};

export const getView = (
  args: ViewProps,
  spacingTheme: SpacingTheme,
): ViewStyle => {
  let view: ViewStyle = {};

  if (args.flex !== undefined && args.flex !== false) {
    if (args.flex === true) view.flex = 1;
    else view.flex = args.flex;
  }

  if (args.direction) view.flexDirection = args.direction;

  if (args.wrap) view.flexWrap = args.wrap;

  if (args.justify) {
    switch (args.justify) {
      case 'start':
        view.justifyContent = 'flex-start';
        break;
      case 'end':
        view.justifyContent = 'flex-end';
        break;
      case 'space-between':
        view.justifyContent = 'space-between';
        break;
      case 'space-around':
        view.justifyContent = 'space-around';
        break;
      case 'space-evenly':
        view.justifyContent = 'space-evenly';
        break;
      default:
        view.justifyContent = 'center';
        break;
    }
  }

  if (args.overflow) view.overflow = args.overflow;

  if (args.gap) view.gap = spacingTheme[args.gap];

  if (args.rowGap) view.rowGap = spacingTheme[args.rowGap];

  if (args.columnGap) view.columnGap = spacingTheme[args.columnGap];

  return view;
};

export const getFont = (
  args: FontProps,
  fontTheme: FontTheme,
  colorTheme: ColorTheme,
): FontStyle => {
  let font: FontStyle = {
    color: colorTheme.text,
    fontFamily: Platform.OS === 'ios' ? fontTheme.family : 'Poppins-Light',
    fontSize: fontTheme.size.medium,
    fontWeight: fontTheme.weight.light,
  };

  if (args.textAlign) font.textAlign = args.textAlign;

  if (args.fontSize) {
    font.fontSize = fontTheme.size[args.fontSize];
  }

  if (args.fontWeight) {
    font.fontWeight = fontTheme.weight[args.fontWeight];
    if (Platform.OS === 'android') {
      switch (args.fontWeight) {
        case 'regular':
          font.fontFamily = 'Poppins-Regular';
          break;
        case 'medium':
          font.fontFamily = 'Poppins-Medium';
          break;
        case 'bold':
          font.fontFamily = 'Poppins-Bold';
          break;
        case 'light':
          font.fontFamily = 'Poppins-Light';
          break;
      }
    }
  }

  if (args.fontColor) {
    font.color = colorTheme[args.fontColor];
  }

  return font;
};

export const getBackground = (
  args: BackgroundProps,
  colorTheme: ColorTheme,
): BackgroundStyle => {
  let background: BackgroundStyle = {};

  if (
    args.backgroundColor !== undefined &&
    colorTheme[args.backgroundColor] !== undefined
  ) {
    background.backgroundColor = colorTheme[args.backgroundColor];
  }
  return background;
};

export const getSize = (args: SizeProps): SizeStyle => {
  let size: SizeStyle = {};

  if (args.width) size.width = args.width;
  if (args.minWidth) size.minWidth = args.minWidth;
  if (args.maxWidth) size.maxWidth = args.maxWidth;
  if (args.height) size.height = args.height;
  if (args.minHeight) size.minHeight = args.minHeight;
  if (args.maxHeight) size.maxHeight = args.maxHeight;

  return size;
};

export const getBorder = (
  args: BorderProps,
  colorTheme: ColorTheme,
): BorderStyle => {
  let border: BorderStyle = {};

  if (
    args.borderColor !== undefined &&
    colorTheme[args.borderColor] !== undefined
  ) {
    border.borderColor = colorTheme[args.borderColor];
  }

  if (args.borderWidth !== undefined) {
    border.borderWidth = args.borderWidth;
  }

  if (args.borderTopWidth !== undefined) {
    border.borderTopWidth = args.borderTopWidth;
  }

  if (args.borderRightWidth !== undefined) {
    border.borderRightWidth = args.borderRightWidth;
  }

  if (args.borderBottomWidth !== undefined) {
    border.borderBottomWidth = args.borderBottomWidth;
  }

  if (args.borderLeftWidth !== undefined) {
    border.borderLeftWidth = args.borderLeftWidth;
  }

  if (args.borderRadius !== undefined) {
    border.borderRadius = args.borderRadius;
  }

  return border;
};

export const getIconProps = (
  args: {color?: KeyofColorTheme; size?: KeyofFontSizeTheme},
  colors: ColorTheme,
  font: FontTheme,
): {color: string; size: number} => {
  return {
    color: colors[args.color || 'text'],
    size: font.size[args.size || 'medium'],
  };
};
