import {ImageStyle, Platform, TextStyle, ViewStyle} from 'react-native';

import {
  KeyofFontSizeTheme,
  KeyofFontWeightTheme,
  Theme,
  ThemedImageStyle,
  ThemedTextStyle,
  ThemedViewStyle,
} from '@styles';

export const getStyle = (
  theme: Theme,
  styles: ThemedViewStyle | ThemedTextStyle | ThemedImageStyle,
): ViewStyle | TextStyle | ImageStyle => {
  if (typeof styles === 'function') {
    return styles(theme);
  }

  return styles;
};

export const getFont = (args: {
  size?: KeyofFontSizeTheme;
  weight?: KeyofFontWeightTheme;
}): TextStyle => {
  const font: TextStyle = Platform.select({
    android: {
      fontFamily: 'Poppins-Light',
      fontWeight: '300',
      fontSize: 18,
    },
    default: {
      fontFamily: 'Poppins',
      fontWeight: '300',
      fontSize: 18,
    },
  });

  switch (args.size) {
    case 'small': {
      font.fontSize = 14;
      break;
    }
    case 'medium': {
      font.fontSize = 18;
      break;
    }
    case 'large': {
      font.fontSize = 24;
      break;
    }
    case 'jumbo': {
      font.fontSize = 32;
      break;
    }
  }

  switch (args.weight) {
    case 'light': {
      font.fontFamily = Platform.select({
        android: 'Poppins-Light',
        default: 'Poppins',
      });
      font.fontWeight = '300';
      break;
    }
    case 'regular': {
      font.fontFamily = Platform.select({
        android: 'Poppins-Regular',
        default: 'Poppins',
      });
      font.fontWeight = '400';
      break;
    }
    case 'medium': {
      font.fontFamily = Platform.select({
        android: 'Poppins-Medium',
        default: 'Poppins',
      });
      font.fontWeight = '500';
      break;
    }
    case 'bold': {
      font.fontFamily = Platform.select({
        android: 'Poppins-Bold',
        default: 'Poppins',
      });
      font.fontWeight = '700';
      break;
    }
  }

  return font;
};
