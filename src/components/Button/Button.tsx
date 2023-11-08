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

type ButtonProps = FontProps &
  SpacingProps &
  AlignProps &
  BackgroundProps &
  TranslationProps & {
    onPress?: () => void;
    isDisabled?: boolean;
    icon?: IconNames;
    iconPosition?: 'trailing' | 'leading';
  };

const Button: FunctionComponentWithChildren<ButtonProps> = ({
  children,
  onPress,
  isDisabled,
  withTranslation,
  icon,
  iconPosition,
  ...props
}) => {
  const {fontColor, fontSize, fontWeight} = props;
  const {
    padding,
    paddingHorizontal,
    paddingVertical,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
  } = props;

  const styles = useStyles(theme => ({
    button: {
      ...getAlign(props),
      ...getBackground(props, theme.colors),
      ...getFont(props, theme.font, theme.colors),
      ...getMargin(props, theme.spacing),
    },
  }));

  return (
    <Touchable isDisabled={isDisabled} style={styles.button} onPress={onPress}>
      <Container
        direction="row"
        padding={padding}
        paddingBottom={paddingBottom}
        paddingHorizontal={paddingHorizontal}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        paddingTop={paddingTop}
        paddingVertical={paddingVertical}>
        {icon && iconPosition === 'leading' && (
          <Icon
            color={props.fontColor}
            marginRight="small"
            name={icon}
            size={props.fontSize}
          />
        )}
        {(withTranslation || children) && (
          <Text
            fontColor={fontColor}
            fontSize={fontSize}
            fontWeight={fontWeight}
            withTranslation={withTranslation}>
            {children}
          </Text>
        )}
        {icon && iconPosition === 'trailing' && (
          <Icon
            color={props.fontColor}
            marginLeft="small"
            name={icon}
            size={props.fontSize}
          />
        )}
      </Container>
    </Touchable>
  );
};

export default Button;
