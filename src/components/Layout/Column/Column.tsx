import React from 'react';
import {View as RNView} from 'react-native';

import {getBackground, getSpacing, getView, useStyles} from '@styles';
import {
  BackgroundProps,
  FunctionComponentWithChildren,
  SpacingProps,
  ViewProps,
} from '@types';

type ColumnStyleProps = SpacingProps & BackgroundProps & ViewProps;

type ColumnProps = {
  style?: ColumnStyleProps;
};

const Column: FunctionComponentWithChildren<ColumnProps> = ({
  children,
  style = {},
}) => {
  const styles = useStyles(theme => ({
    column: {
      ...getBackground(style, theme.colors),
      ...getSpacing(style, theme.spacing),
      ...getView(style, theme.spacing),
      flexDirection: 'column',
    },
  }));

  return <RNView style={styles.column}>{children}</RNView>;
};

export default Column;
