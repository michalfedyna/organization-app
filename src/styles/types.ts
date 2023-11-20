import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

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

export interface FontTheme {
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
}

export interface SpacingTheme {
  none: number;
  small: number;
  medium: number;
  large: number;
}

export interface ColorTheme {
  background: string;
  foreground: string;
  border: string;
  text: string;
  textInverted: string;
  primary: string;
  secondary: string;
  accent: string;
  attention: string; // call to action
  toned: string; // grey
  success: string; // green
  warning: string; // yellow
  error: string; // red
  info: string; // blue
  facebook: string;
  google: string;
  apple: string;
}

export interface Theme {
  isDark: boolean;
  font: FontTheme;
  spacing: SpacingTheme;
  colors: ColorTheme;
}

export type KeyofFontSizeTheme = keyof FontTheme['size'];

export type KeyofFontWeightTheme = keyof FontTheme['weight'];

export type KeyofSpacingTheme = keyof SpacingTheme;

export type KeyofColorTheme = keyof ColorTheme;

export type ThemedViewStyle = ViewStyle | ((theme: Theme) => ViewStyle);

export type ThemedTextStyle = TextStyle | ((theme: Theme) => TextStyle);

export type ThemedImageStyle = ImageStyle | ((theme: Theme) => ImageStyle);
