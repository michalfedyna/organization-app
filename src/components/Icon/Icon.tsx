import React from 'react';
import {View as RNView} from 'react-native';

import {ThemedViewStyle, getStyle, useStyles} from '@styles';
import {IconNames, Icons} from '@svg';
import type {FunctionComponent} from '@types';

type IconProps = {
  name: IconNames;
  containerStyle?: ThemedViewStyle;
  iconStyle: {
    size: number;
    color: string;
  };
};

const Icon: FunctionComponent<IconProps> = ({
  name,
  containerStyle = {},
  iconStyle: {size, color},
}) => {
  const styles = useStyles(theme => ({
    icon: {
      ...getStyle(theme, containerStyle),
      alignSelf: 'center',
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
