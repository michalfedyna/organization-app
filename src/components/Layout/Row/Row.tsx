import React from 'react';
import {View as RNView} from 'react-native';
import {useStyles, getSpacing, getView} from '@styles';
import {FunctionComponentWithChildren, SpacingProps, ViewProps} from '@types';

type RowProps = SpacingProps & ViewProps & {};

const Row: FunctionComponentWithChildren<RowProps> = ({children, ...props}) => {
  const styles = useStyles(theme => ({
    row: {
      ...getSpacing(props, theme.spacing),
      ...getView(props),
      flexDirection: 'row',
      gap: 20,
    },
  }));

  return <RNView style={styles.row}>{children}</RNView>;
};

export default Row;
