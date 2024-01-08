import {ThemedTextStyle} from '@styles';
import {TranslationProps} from '@types';

export enum Variants {
  Header = 'header',
  Paragraph = 'paragraph',
  Jumbo = 'jumbo',
  Body = 'body',
  Button = 'button',
}

export enum Colors {
  standard = 'standard',
  inverted = 'inverted',
}

export type TextProps = TranslationProps & {
  style?: ThemedTextStyle;
  variant?: Variants;
  color?: Colors;
};
