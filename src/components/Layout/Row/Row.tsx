import React from 'react';
import {View as RNView} from 'react-native';

import {ThemedViewStyle, getStyle, useStyles} from '@styles';
import {FunctionComponentWithChildren} from '@types';

type RowProps = {
  style?: ThemedViewStyle;
  flex?: number;
  mainAxis?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  crossAxis?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  reverse?: boolean;
};

const Row: FunctionComponentWithChildren<RowProps> = ({
  children,
  style = {},
  reverse = false,
  flex,
  mainAxis,
  crossAxis,
}) => {
  const styles = useStyles(theme => ({
    row: {
      alignItems: crossAxis,
      flex: flex,
      flexDirection: reverse ? 'row-reverse' : 'row',
      justifyContent: mainAxis,
      ...getStyle(theme, style),
    },
  }));

  return <RNView style={styles.row}>{children}</RNView>;
};

export default Row;
