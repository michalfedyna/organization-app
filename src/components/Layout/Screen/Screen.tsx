import React from 'react';
import {View as RNView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {FunctionComponentWithChildren} from '@types';
import {useStyles} from '@styles';

type ScreenProps = {};

const Screen: FunctionComponentWithChildren<ScreenProps> = ({children}) => {
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

  return <RNView style={styles.container}>{children}</RNView>;
};

export default Screen;
