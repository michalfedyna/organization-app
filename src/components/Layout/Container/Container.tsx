import React from 'react';
import {View as RNView} from 'react-native';

import type {
  FunctionComponentWithChildren,
  SpacingProps,
  AlignProps,
  BackgroundProps,
  SizeProps,
  ViewProps,
  BorderProps,
} from '@types';
import {
  useStyles,
  getSpacing,
  getAlign,
  getBackground,
  getSize,
  getView,
  getBorder,
} from '@styles';

type ContainerProps = SpacingProps &
  AlignProps &
  BackgroundProps &
  ViewProps &
  SizeProps &
  BorderProps & {};

const Container: FunctionComponentWithChildren<ContainerProps> = ({
  children,
  ...props
}) => {
  const styles = useStyles(theme => ({
    container: {
      ...getSpacing(props, theme.spacing),
      ...getAlign(props),
      ...getBackground(props, theme.colors),
      ...getView(props),
      ...getSize(props),
      ...getBorder(props, theme.colors),
    },
  }));

  return <RNView style={styles.container}>{children}</RNView>;
};

export default Container;
