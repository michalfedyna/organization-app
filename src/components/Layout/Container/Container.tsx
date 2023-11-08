import React from 'react';
import {View as RNView} from 'react-native';

import {
  getAlign,
  getBackground,
  getBorder,
  getSize,
  getSpacing,
  getView,
  useStyles,
} from '@styles';
import type {
  AlignProps,
  BackgroundProps,
  BorderProps,
  FunctionComponentWithChildren,
  SizeProps,
  SpacingProps,
  ViewProps,
} from '@types';

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
      ...getAlign(props),
      ...getBackground(props, theme.colors),
      ...getBorder(props, theme.colors),
      ...getSize(props),
      ...getSpacing(props, theme.spacing),
      ...getView(props, theme.spacing),
    },
  }));

  return <RNView style={styles.container}>{children}</RNView>;
};

export default Container;
