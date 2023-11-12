import type {FC, PropsWithChildren} from 'react';

import {TranslationKey} from '@i18n';
import {
  KeyofColorTheme,
  KeyofFontSizeTheme,
  KeyofFontWeightTheme,
  KeyofSpacingTheme,
} from '@styles';

export type FunctionComponent<T = {}> = FC<T>;

export type FunctionComponentWithChildren<T = {}> = FC<PropsWithChildren<T>>;

export type SVGComponent = FunctionComponent<SVGProps>;

export type MarginProps = {
  margin?: KeyofSpacingTheme;
  marginVertical?: KeyofSpacingTheme;
  marginHorizontal?: KeyofSpacingTheme;
  marginTop?: KeyofSpacingTheme;
  marginRight?: KeyofSpacingTheme;
  marginBottom?: KeyofSpacingTheme;
  marginLeft?: KeyofSpacingTheme;
};

export type PaddingProps = {
  padding?: KeyofSpacingTheme;
  paddingVertical?: KeyofSpacingTheme;
  paddingHorizontal?: KeyofSpacingTheme;
  paddingTop?: KeyofSpacingTheme;
  paddingRight?: KeyofSpacingTheme;
  paddingBottom?: KeyofSpacingTheme;
  paddingLeft?: KeyofSpacingTheme;
};

export type SpacingProps = MarginProps & PaddingProps;

export type AlignProps = {
  align?: 'center' | 'start' | 'end';
};

export type FontProps = {
  fontSize?: KeyofFontSizeTheme;
  fontWeight?: KeyofFontWeightTheme;
  fontColor?: KeyofColorTheme;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
};

export type ViewProps = {
  flex?: boolean | number;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  justify?:
    | 'center'
    | 'start'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  overflow?: 'visible' | 'hidden' | 'scroll';
  gap?: KeyofSpacingTheme;
  rowGap?: KeyofSpacingTheme;
  columnGap?: KeyofSpacingTheme;
};

export type BorderProps = {
  borderColor?: KeyofColorTheme;
  borderWidth?: number;
  borderTopWidth?: number;
  borderRightWidth?: number;
  borderBottomWidth?: number;
  borderLeftWidth?: number;
  borderRadius?: number;
};

export type SizeProps = {
  width?: number | `${number}%`;
  minWidth?: number | `${number}%`;
  maxWidth?: number | `${number}%`;
  height?: number | `${number}%`;
  minHeight?: number | `${number}%`;
  maxHeight?: number | `${number}%`;
};

export type BackgroundProps = {
  backgroundColor?: KeyofColorTheme;
};

export type TranslationProps = {
  withTranslation?: TranslationKey;
};

export type SVGProps = {
  size: number;
  color: string;
};
