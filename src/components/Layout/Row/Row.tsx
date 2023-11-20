import React from 'react';
import {View as RNView} from 'react-native';

import {ThemedViewStyle, useStyles} from '@styles';
import {FunctionComponentWithChildren} from '@types';

type RowProps = {
  style?: ThemedViewStyle;
};

const Row: FunctionComponentWithChildren<RowProps> = ({
  children,
  style = {},
}) => {
  const styles = useStyles(theme => ({
    row: {
      ...(typeof style === 'function' ? style(theme) : style),
      flexDirection: 'row',
    },
  }));

  return <RNView style={styles.row}>{children}</RNView>;
};

export default Row;
