import React from 'react';
import {View as RNView} from 'react-native';

import {KeyofColorTheme, ThemedViewStyle, getStyle, useStyles} from '@styles';
import type {FunctionComponentWithChildren} from '@types';

type ContainerProps = {
  style?: ThemedViewStyle;
  backgroundColor?: KeyofColorTheme;
};

const Container: FunctionComponentWithChildren<ContainerProps> = ({
  children,
  style = {},
  backgroundColor = 'background',
}) => {
  const styles = useStyles(theme => ({
    container: {
      backgroundColor: theme.colors[backgroundColor],
      ...getStyle(theme, style),
    },
  }));

  return <RNView style={styles.container}>{children}</RNView>;
};

export default Container;
