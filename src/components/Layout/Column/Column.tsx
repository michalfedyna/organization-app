import React from 'react';
import {View as RNView} from 'react-native';

import {ThemedViewStyle, getStyle, useStyles} from '@styles';
import {FunctionComponentWithChildren} from '@types';

type ColumnProps = {
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

const Column: FunctionComponentWithChildren<ColumnProps> = ({
  children,
  style = {},
  flex,
  mainAxis,
  crossAxis,
  reverse,
}) => {
  const styles = useStyles(theme => ({
    column: {
      alignItems: crossAxis,
      flex: flex,
      flexDirection: reverse ? 'column-reverse' : 'column',
      justifyContent: mainAxis,
      ...getStyle(theme, style),
    },
  }));

  return <RNView style={styles.column}>{children}</RNView>;
};

export default Column;
