import React, {FC, PropsWithChildren} from 'react';
import {View as RNView} from 'react-native';
import {
  useStyles,
  Colors,
  SpacingProps,
  getMargin,
  getPadding,
  getAlign,
} from '@styles';

type ContainerProps = PropsWithChildren<
  {
    color?: keyof Colors;
  } & SpacingProps
>;

const Container: FC<ContainerProps> = ({
  children,
  color = 'background',
  margin = 'none',
  marginDirection,
  padding = 'none',
  paddingDirection,
  align = 'center',
}) => {
  const styles = useStyles(theme => ({
    container: {
      ...getMargin(theme.spacing[margin], marginDirection),
      ...getPadding(theme.spacing[padding], paddingDirection),
      ...getAlign(align),
      backgroundColor: theme.colors[color],
    },
  }));

  return <RNView style={styles.container}>{children}</RNView>;
};

export default Container;
