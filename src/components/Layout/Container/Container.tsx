import React from 'react';
import {View as RNView} from 'react-native';

import {ThemedViewStyle, getStyle, useStyles} from '@styles';
import type {FunctionComponentWithChildren} from '@types';

type ContainerProps = {
  style?: ThemedViewStyle;
};

const Container: FunctionComponentWithChildren<ContainerProps> = ({
  children,
  style = {},
}) => {
  const styles = useStyles(theme => ({
    container: {
      backgroundColor: theme.colors.background,
      ...getStyle(theme, style),
    },
  }));

  return <RNView style={styles.container}>{children}</RNView>;
};

export default Container;
