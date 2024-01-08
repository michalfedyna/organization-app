import ButtonIcon from './ButtonIcon';
import ButtonWrapper from './ButtonWrapper';
import type {ButtonProps} from './types';
import {getButtonStyles} from './utils';
import React from 'react';

import {Row, Text, TextVariants, Touchable} from '@components';
import {useStyles, useTheme} from '@styles';
import type {FunctionComponent} from '@types';

const Button: FunctionComponent<ButtonProps> = ({
  buttonColor,
  disabled,
  icon,
  iconPosition,
  inline,
  onPress,
  size,
  textColor,
  translation,
  variant,
}) => {
  const theme = useTheme();
  const styles = useStyles({
    touchable: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: theme.spacing.small,
      paddingHorizontal: theme.spacing.medium,
    },
  });

  return (
    <ButtonWrapper inline={inline}>
      <Touchable disabled={disabled} style={styles.touchable} onPress={onPress}>
        <Row
          crossAxis="center"
          mainAxis="center"
          reverse={iconPosition === 'leading'}>
          {translation && (
            <Text translation={translation} variant={TextVariants.Button} />
          )}
          <ButtonIcon
            color={theme.colors.text}
            icon={icon}
            iconPosition={iconPosition}
            size={theme.font.size.jumbo}
          />
        </Row>
      </Touchable>
    </ButtonWrapper>
  );
};

export default Button;
