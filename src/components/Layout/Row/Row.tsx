import React from 'react';
import {View as RNView} from 'react-native';

import {getBackground, getSpacing, getView, useStyles} from '@styles';
import {
  BackgroundProps,
  FunctionComponentWithChildren,
  SpacingProps,
  ViewProps,
} from '@types';

type RowStyleProps = SpacingProps & BackgroundProps & ViewProps;

type RowProps = {
  style?: RowStyleProps;
};

const Row: FunctionComponentWithChildren<RowProps> = ({
  children,
  style = {},
}) => {
  const styles = useStyles(theme => ({
    row: {
      ...getBackground(style, theme.colors),
      ...getSpacing(style, theme.spacing),
      ...getView(style, theme.spacing),
      flexDirection: 'row',
    },
  }));

  return <RNView style={styles.row}>{children}</RNView>;
};

export default Row;
