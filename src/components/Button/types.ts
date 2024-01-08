import {IconNames} from '@svg';
import {TranslationProps} from '@types';

export type ButtonProps = TranslationProps & {
  buttonColor?: ButtonColors;
  textColor?: TextColors;
  icon?: IconNames;
  iconPosition?: 'trailing' | 'leading';
  disabled?: boolean;
  inline?: boolean;
  size?: Sizes;
  variant?: Variants;
  onPress?: () => void;
};

export type ButtonIconProps = Pick<ButtonProps, 'icon' | 'iconPosition'> & {
  size: number;
  color: string;
};

export type ButtonWrapperProps = Pick<ButtonProps, 'inline'>;

export enum Variants {
  Text = 'text',
  Outlined = 'outlined',
  Contained = 'contained',
}

export enum Sizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export enum ButtonColors {
  primary = 'primary',
  secondary = 'secondary',
  accent = 'accent',
}

export enum TextColors {
  text = 'text',
  textInverted = 'textInverted',
}
