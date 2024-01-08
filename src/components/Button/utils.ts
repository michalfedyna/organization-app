import {ButtonColors, Sizes, TextColors, Variants} from './Button.types';
import {ViewStyle} from 'react-native';

import {Theme} from '@styles';

export const getButtonStyles = (
  theme: Theme,
  variant?: Variants,
  size?: Sizes,
  buttonColor?: ButtonColors,
  textColor?: TextColors,
  disabled?: boolean,
): {
  touchable: ViewStyle;
  row: ViewStyle;
} => {
  const touchable: ViewStyle = {
    paddingVertical: theme.spacing.small,
    paddingHorizontal: theme.spacing.medium,
  };
  const row: ViewStyle = {};

  return {
    touchable,
    row,
  };
};

export const getButtonProps = (
  theme: Theme,
  variant?: Variants,
  size?: Sizes,
  buttonColor?: ButtonColors,
  textColor?: TextColors,
  disabled?: boolean,
): {iconStyle: {size: number; color: string}} => {
  const iconStyle = {size: theme.font.size.medium, color: theme.colors.text};

  return {
    iconStyle,
  };
};
