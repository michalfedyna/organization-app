import React from 'react';
import {View as RNView} from 'react-native';

import {
  getAlign,
  getIconProps,
  getSpacing,
  useStyles,
  useTheme,
  KeyofColorTheme,
  KeyofFontSizeTheme,
} from '@styles';
import type {AlignProps, FunctionComponent, SpacingProps} from '@types';
import {IconNames, Icons} from '@svg';

type IconProps = SpacingProps &
  AlignProps & {
    name: IconNames;
    color?: KeyofColorTheme;
    size?: KeyofFontSizeTheme;
  };

const Icon: FunctionComponent<IconProps> = ({name, color, size, ...props}) => {
  const {colors, font} = useTheme();
  const styles = useStyles(theme => ({
    icon: {
      ...getSpacing(props, theme.spacing),
      ...getAlign(props),
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
