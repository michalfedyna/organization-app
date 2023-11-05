import React, {FC, PropsWithChildren} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useStyles} from '@styles';

type ScreenProps = PropsWithChildren<{}>;

const Screen: FC<ScreenProps> = ({children}) => {
  const {top, bottom, left, right} = useSafeAreaInsets();
  const styles = useStyles(theme => ({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingTop: top,
      paddingBottom: bottom,
      paddingLeft: left,
      paddingRight: right,
    },
  }));

  return <View style={styles.container}>{children}</View>;
};

export default Screen;
