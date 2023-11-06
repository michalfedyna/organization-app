import React from 'react';
import {View as RNView} from 'react-native';
import {useStyles, getSpacing, getView} from '@styles';
import {FunctionComponentWithChildren, SpacingProps, ViewProps} from '@types';

type ColumnProps = SpacingProps & ViewProps;

const Column: FunctionComponentWithChildren<ColumnProps> = ({
  children,
  ...props
}) => {
  const styles = useStyles(theme => ({
    column: {
      ...getSpacing(props, theme.spacing),
      ...getView(props),
      flexDirection: 'column',
    },
  }));

  return <RNView style={styles.column}>{children}</RNView>;
};

export default Column;
