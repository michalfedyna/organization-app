import React from 'react';

import type {
  FunctionComponentWithChildren,
  FontProps,
  SpacingProps,
  TranslationProps,
  AlignProps,
  BackgroundProps,
} from '@types';
import {useStyles, getAlign, getFont, getMargin, getBackground} from '@styles';
import {Container, Icon, Text, Touchable} from '@components';
import {IconNames} from '@svg';

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
      ...getMargin(props, theme.spacing),
      ...getAlign(props),
      ...getFont(props, theme.font, theme.colors),
      ...getBackground(props, theme.colors),
    },
  }));

  return (
    <Touchable style={styles.button} isDisabled={isDisabled} onPress={onPress}>
      <Container
        direction="row"
        padding={padding}
        paddingHorizontal={paddingHorizontal}
        paddingVertical={paddingVertical}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}>
        {icon && iconPosition === 'leading' && (
          <Icon name={icon} color={props.fontColor} marginRight="small" />
        )}
        <Text
          withTranslation={withTranslation}
          fontColor={fontColor}
          fontSize={fontSize}
          fontWeight={fontWeight}>
          {children}
        </Text>
        {icon && iconPosition === 'trailing' && (
          <Icon name={icon} color={props.fontColor} marginLeft="small" />
        )}
      </Container>
    </Touchable>
  );
};

export default Button;
