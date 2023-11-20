import {TextStyle} from 'react-native';

import {Theme, ThemedTextStyle, getFont} from '@styles';
import {TranslationProps} from '@types';

export enum Variants {
  Header = 'header',
  Paragraph = 'paragraph',
  Jumbo = 'jumbo',
  Body = 'body',
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

export const getVariantStyle = (
  theme: Theme,
  variant?: Variants,
): TextStyle => {
  switch (variant) {
    case Variants.Header: {
      const style: TextStyle = getFont({weight: 'light', size: 'large'});
      style.color = theme.colors.text;
      return style;
    }
    case Variants.Paragraph: {
      const style: TextStyle = getFont({weight: 'light', size: 'medium'});
      style.color = theme.colors.text;
      return style;
    }
    case Variants.Jumbo: {
      const style: TextStyle = getFont({weight: 'light', size: 'jumbo'});
      style.color = theme.colors.text;
      return style;
    }
    default:
    case Variants.Body: {
      const style: TextStyle = getFont({weight: 'light', size: 'medium'});
      style.color = theme.colors.text;
      return style;
    }
  }
};

export const getColorStyle = (theme: Theme, color?: Colors): TextStyle => {
  switch (color) {
    case Colors.inverted: {
      const style: TextStyle = {};
      style.color = theme.colors.textInverted;
      return style;
    }
    default:
    case Colors.standard: {
      const style: TextStyle = {};
      style.color = theme.colors.text;
      return style;
    }
  }
};
