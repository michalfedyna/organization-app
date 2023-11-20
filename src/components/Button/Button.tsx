import React from 'react';
import {TextStyle, ViewStyle} from 'react-native';

import {Icon, Row, Text, Touchable} from '@components';
import {
  Theme,
  ThemedTextStyle,
  ThemedViewStyle,
  getFont,
  getStyle,
  useStyles,
} from '@styles';
import {IconNames} from '@svg';
import type {FunctionComponentWithChildren, TranslationProps} from '@types';

enum Variants {
  Primary = 'primary',
  PrimarySmall = 'primarySmall',
  PrimaryLarge = 'primaryLarge',
  Secondary = 'secondary',
  SecondarySmall = 'secondarySmall',
  SecondaryLarge = 'secondaryLarge',
}

const getVariantStyle = (variant: Variants, theme: Theme) => {
  switch (variant) {
    case Variants.Primary: {
      return {};
    }
    case Variants.Secondary: {
      return {};
    }
  }
};

type ButtonProps = TranslationProps & {
  icon?: IconNames;
  iconPosition?: 'trailing' | 'leading';
  isDisabled?: boolean;
  onPress?: () => void;
  style?: ThemedViewStyle;
  textStyle?: ThemedTextStyle;
  containerStyle?: ThemedViewStyle;
};

const Button: FunctionComponentWithChildren<ButtonProps> = ({
  children,
  icon,
  iconPosition,
  isDisabled,
  onPress,
  style = {},
  textStyle = {},
  containerStyle = {},
  withTranslation,
}) => {
  const styles = useStyles(theme => ({
    button: {
      ...getStyle(style, theme),
    },
    text: {
      ...getStyle(textStyle, theme),
    },
    container: {
      ...getStyle(containerStyle, theme),
    },
    iconLeading: {
      marginRight: theme.spacing.small,
    },
    iconTrailing: {
      marginLeft: theme.spacing.small,
    },
  }));

  return (
    <Touchable isDisabled={isDisabled} style={styles.button} onPress={onPress}>
      <Row style={{}}>
        {icon && iconPosition === 'leading' && (
          <Icon
            color={fontColor}
            name={icon}
            size={fontSize}
            style={styles.iconLeading}
          />
        )}
        {(withTranslation || children) && (
          <Text style={styles.text} withTranslation={withTranslation}>
            {children}
          </Text>
        )}
        {icon && iconPosition === 'trailing' && (
          <Icon
            color={fontColor}
            name={icon}
            size={fontSize}
            style={styles.iconTrailing}
          />
        )}
      </Row>
    </Touchable>
  );
};

export default Button;
