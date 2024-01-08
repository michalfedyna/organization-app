import {Colors, Variants} from './Text.types';
import {TextStyle} from 'react-native';

import {Theme, getFont} from '@styles';

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
    case Variants.Button: {
      const style: TextStyle = getFont({weight: 'medium', size: 'medium'});
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
