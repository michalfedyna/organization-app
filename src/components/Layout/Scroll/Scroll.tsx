import React from 'react';
import {ScrollView as RNScrollView} from 'react-native';

import {ThemedViewStyle, useStyles} from '@styles';
import type {FunctionComponentWithChildren} from '@types';

type ScrollProps = {
  style?: ThemedViewStyle;
  contentContainerStyle?: ThemedViewStyle;
};

const Scroll: FunctionComponentWithChildren<ScrollProps> = ({
  children,
  style,
}) => {
  const styles = useStyles(theme => ({
    scroll: {
      flex: 1,
      ...(typeof style === 'function' ? style(theme) : style),
    },
    scrollContentContainer: {
      ...(typeof style === 'function' ? style(theme) : style),
    },
  }));

  return (
    <RNScrollView
      contentContainerStyle={styles.scrollContentContainer}
      style={styles.scroll}>
      {children}
    </RNScrollView>
  );
};

export default Scroll;
