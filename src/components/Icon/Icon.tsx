import React from 'react';
import {View as RNView} from 'react-native';

import {ThemedViewStyle, useStyles} from '@styles';
import {IconNames, Icons} from '@svg';
import type {FunctionComponent} from '@types';

type IconProps = {
  color: string;
  name: IconNames;
  size: number;
  style?: ThemedViewStyle;
};

const Icon: FunctionComponent<IconProps> = ({
  color,
  name,
  size,
  style = {},
}) => {
  const styles = useStyles(theme => ({
    icon: {
      ...(typeof style === 'function' ? style(theme) : style),
    },
  }));

  const IconComponent = Icons[name];

  return (
    <RNView style={styles.icon}>
      <IconComponent color={color} size={size} />
    </RNView>
  );
};

export default Icon;
