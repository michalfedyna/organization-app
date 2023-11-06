import {FlexStyle, TextStyle} from 'react-native';

export type FontWeight =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 'bold'
  | 'normal';

export type FontTheme = {
  family: string;
  size: {
    small: number;
    medium: number;
    large: number;
    jumbo: number;
  };
  weight: {
    light: FontWeight;
    regular: FontWeight;
    medium: FontWeight;
    bold: FontWeight;
  };
};

export type SpacingTheme = {
  none: number;
  small: number;
  medium: number;
  large: number;
};

export type ColorTheme = {
  text: string;
  textInverted: string;
  background: string;
  foreground: string;
  primary: string;
  secondary: string;
  accent: string;
  border: string;
};

// TODO change colors structure

export type BackgroundColorTheme = {
  background: string;
  foreground: string;
};

export type TextColorTheme = {
  onLightBackground: string;
  onDarkBackground: string;
};

export type AccentColorTheme = {
  attention: string; // call to action
  toned: string; // grey
  success: string; // green
  warning: string; // yellow
  error: string; // red
  info: string; // blue
};

export type Theme = {
  isDark: boolean;
  font: FontTheme;
  spacing: SpacingTheme;
  colors: ColorTheme;
};

export type KeyofFontSizeTheme = keyof FontTheme['size'];

export type KeyofFontWeightTheme = keyof FontTheme['weight'];

export type KeyofSpacingTheme = keyof SpacingTheme;

export type KeyofColorTheme = keyof ColorTheme;

// Style Types

export type MarginStyle = Pick<
  FlexStyle,
  | 'margin'
  | 'marginHorizontal'
  | 'marginVertical'
  | 'marginTop'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginRight'
>;

export type PaddingStyle = Pick<
  FlexStyle,
  | 'padding'
  | 'paddingHorizontal'
  | 'paddingVertical'
  | 'paddingTop'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'paddingRight'
>;

export type SpacingStyle = MarginStyle & PaddingStyle;

export type AlignStyle = Pick<FlexStyle, 'alignSelf'>;

export type FontStyle = Pick<
  TextStyle,
  'fontFamily' | 'fontSize' | 'fontWeight' | 'color'
>;

export type ViewStyle = Pick<
  FlexStyle,
  'flex' | 'flexDirection' | 'flexWrap' | 'justifyContent' | 'overflow'
>;

export type BackgroundStyle = {backgroundColor?: string};

export type SizeStyle = Pick<
  FlexStyle,
  'width' | 'minWidth' | 'maxWidth' | 'height' | 'minHeight' | 'maxHeight'
>;

export type BorderStyle = Pick<
  FlexStyle,
  | 'borderWidth'
  | 'borderTopWidth'
  | 'borderRightWidth'
  | 'borderBottomWidth'
  | 'borderLeftWidth'
> & {
  borderColor?: string;
  borderRadius?: number;
};
