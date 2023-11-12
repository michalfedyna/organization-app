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

type ContainerStyleProps = SpacingProps &
  AlignProps &
  BackgroundProps &
  ViewProps &
  SizeProps &
  BorderProps;

type ContainerProps = {
  style?: ContainerStyleProps;
};

const Container: FunctionComponentWithChildren<ContainerProps> = ({
  children,
  style = {},
}) => {
  const styles = useStyles(theme => ({
    container: {
      ...getAlign(style),
      ...getBackground(style, theme.colors),
      ...getBorder(style, theme.colors),
      ...getSize(style),
      ...getSpacing(style, theme.spacing),
      ...getView(style, theme.spacing),
    },
  }));

  return <RNView style={styles.container}>{children}</RNView>;
};

export default Container;
