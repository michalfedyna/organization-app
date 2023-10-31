import React, {FC, PropsWithChildren} from 'react';
import {View} from 'react-native';
import {useStyles} from '@styles/utils';

type ContainerProps = PropsWithChildren<{}>;

const Container: FC<ContainerProps> = ({children}) => {
  const styles = useStyles(theme => ({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  }));

  return <View style={styles.container}>{children}</View>;
};
export default Container;
