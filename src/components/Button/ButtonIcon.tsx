import type {ButtonIconProps} from './types';
import React from 'react';

import {Icon} from '@components';
import {useStyles, useTheme} from '@styles';
import type {FunctionComponent} from '@types';

const ButtonIcon: FunctionComponent<ButtonIconProps> = ({
  color,
  icon,
  iconPosition,
  size,
}) => {
  const theme = useTheme();
  const styles = useStyles({
    iconLeading: {
      marginRight: theme.spacing.small,
    },
    iconTrailing: {
      marginLeft: theme.spacing.small,
    },
  });
  if (!icon) {
    return null;
  }

  const iconStyle =
    iconPosition &&
    (iconPosition === 'leading' ? styles.iconLeading : styles.iconTrailing);

  return (
    <Icon containerStyle={iconStyle} iconStyle={{size, color}} name={icon} />
  );
};

export default ButtonIcon;
