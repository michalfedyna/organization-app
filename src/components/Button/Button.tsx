import React, {FC, PropsWithChildren} from 'react';
import {TouchableOpacity} from 'react-native';

import {
  useStyles,
  Colors,
  FontProps,
  SpacingProps,
  getMargin,
  getAlign,
} from '@styles';
import {Container, Text} from '@components';

type ButtonProps = PropsWithChildren<
  {
    color?: keyof Colors;
    onClick?: () => void;
    isDisabled?: boolean;
    withTranslation?: string;
  } & FontProps &
    SpacingProps
>;

const Button: FC<ButtonProps> = ({
  children,
  isDisabled,
  color = 'accent',
  withTranslation,
  onClick,
  fontColor = 'textInverted',
  fontSize,
  fontWeight,
  margin = 'none',
  marginDirection,
  padding = 'medium',
  paddingDirection,
  align = 'center',
}) => {
  const styles = useStyles(theme => ({
    button: {
      ...getMargin(theme.spacing[margin], marginDirection),
      ...getAlign(align),
      borderRadius: 10,
      overflow: 'hidden',
    },
  }));

  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={styles.button}
      onPress={onClick}>
      <Container
        color={color}
        padding={padding}
        paddingDirection={paddingDirection}>
        <Text
          withTranslation={withTranslation}
          fontColor={fontColor}
          fontSize={fontSize}
          fontWeight={fontWeight}>
          {children}
        </Text>
      </Container>
    </TouchableOpacity>
  );
};

export default Button;
