import React from 'react';
import {View as RNView} from 'react-native';

import {
  KeyofColorTheme,
  KeyofFontSizeTheme,
  getAlign,
  getIconProps,
  getSpacing,
  useStyles,
  useTheme,
} from '@styles';
import {IconNames, Icons} from '@svg';
import type {AlignProps, FunctionComponent, SpacingProps} from '@types';

type IconStyleProps = SpacingProps & AlignProps;

type IconProps = {
  color?: KeyofColorTheme;
  name: IconNames;
  size?: KeyofFontSizeTheme;
  style?: IconStyleProps;
};

const Icon: FunctionComponent<IconProps> = ({
  color,
  name,
  size,
  style = {},
}) => {
  const {colors, font} = useTheme();
  const styles = useStyles(theme => ({
    icon: {
      ...getAlign(style),
      ...getSpacing(style, theme.spacing),
    },
  }));

  const IconComponent = Icons[name];

  return (
    <RNView style={styles.icon}>
      <IconComponent {...getIconProps({color, size}, colors, font)} />
    </RNView>
  );
};

export default Icon;
