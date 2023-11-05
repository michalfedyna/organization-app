import React, {FC, PropsWithChildren} from 'react';
import {View as RNView} from 'react-native';
import {useStyles, Colors, SpacingProps, getMargin, getPadding} from '@styles';

type ContainerProps = PropsWithChildren<
  {
    color?: keyof Colors;
  } & SpacingProps
>;

const Column: FC<ContainerProps> = ({
  children,
  color = 'background',
  margin = 'none',
  marginDirection,
  padding = 'none',
  paddingDirection,
}) => {
  const styles = useStyles(theme => ({
    container: {
      ...getMargin(theme.spacing[margin], marginDirection),
      ...getPadding(theme.spacing[padding], paddingDirection),
      backgroundColor: theme.colors[color],
      flexDirection: 'column',
      flex: 1,
    },
  }));

  return <RNView style={styles.container}>{children}</RNView>;
};

export default Column;
