import React from 'react';

import {Container, Icon, Text, Touchable} from '@components';
import {getAlign, getBackground, getFont, getMargin, useStyles} from '@styles';
import {IconNames} from '@svg';
import type {
  AlignProps,
  BackgroundProps,
  FontProps,
  FunctionComponentWithChildren,
  SpacingProps,
  TranslationProps,
} from '@types';

type ButtonStyleProps = FontProps & SpacingProps & AlignProps & BackgroundProps;

type ButtonProps = TranslationProps & {
  icon?: IconNames;
  iconPosition?: 'trailing' | 'leading';
  isDisabled?: boolean;
  onPress?: () => void;
  style?: ButtonStyleProps;
};

const Button: FunctionComponentWithChildren<ButtonProps> = ({
  children,
  icon,
  iconPosition,
  isDisabled,
  onPress,
  style = {},
  withTranslation,
}) => {
  const {fontColor, fontSize, fontWeight} = style;
  const {
    padding,
    paddingHorizontal,
    paddingVertical,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
  } = style;

  const styles = useStyles(theme => ({
    button: {
      ...getAlign(style),
      ...getBackground(style, theme.colors),
      ...getFont(style, theme.font, theme.colors),
      ...getMargin(style, theme.spacing),
    },
  }));

  return (
    <Touchable isDisabled={isDisabled} style={styles.button} onPress={onPress}>
      <Container
        style={{
          direction: 'row',
          padding,
          paddingBottom,
          paddingHorizontal,
          paddingLeft,
          paddingRight,
          paddingTop,
          paddingVertical,
        }}>
        {icon && iconPosition === 'leading' && (
          <Icon
            color={fontColor}
            name={icon}
            size={fontSize}
            style={{marginRight: 'small'}}
          />
        )}
        {(withTranslation || children) && (
          <Text
            style={{fontColor, fontSize, fontWeight}}
            withTranslation={withTranslation}>
            {children}
          </Text>
        )}
        {icon && iconPosition === 'trailing' && (
          <Icon
            color={fontColor}
            name={icon}
            size={fontSize}
            style={{marginLeft: 'small'}}
          />
        )}
      </Container>
    </Touchable>
  );
};

export default Button;
