import React from 'react';
import {View as RNView} from 'react-native';

import {getBackground, getSpacing, getView, useStyles} from '@styles';
import {
  BackgroundProps,
  FunctionComponentWithChildren,
  SpacingProps,
  ViewProps,
} from '@types';

type RowProps = SpacingProps & ViewProps & BackgroundProps & {};

const Row: FunctionComponentWithChildren<RowProps> = ({children, ...props}) => {
  const styles = useStyles(theme => ({
    row: {
      ...getBackground(props, theme.colors),
      ...getSpacing(props, theme.spacing),
      ...getView(props, theme.spacing),
      flexDirection: 'row',
    },
  }));

  return <RNView style={styles.row}>{children}</RNView>;
};

export default Row;
