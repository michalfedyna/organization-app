import React from 'react';
import {View as RNView} from 'react-native';

import {ThemedViewStyle, useStyles} from '@styles';
import {FunctionComponentWithChildren} from '@types';

type ColumnProps = {
  style?: ThemedViewStyle;
};

const Column: FunctionComponentWithChildren<ColumnProps> = ({
  children,
  style = {},
}) => {
  const styles = useStyles(theme => ({
    column: {
      flexDirection: 'column',
      ...(typeof style === 'function' ? style(theme) : style),
    },
  }));

  return <RNView style={styles.column}>{children}</RNView>;
};

export default Column;
