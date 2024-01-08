import React from 'react';
import {ScrollView as RNScrollView} from 'react-native';

import {ThemedViewStyle, getStyle, useStyles} from '@styles';
import type {FunctionComponentWithChildren} from '@types';

type ScrollProps = {
  style?: ThemedViewStyle;
  contentContainerStyle?: ThemedViewStyle;
};

const Scroll: FunctionComponentWithChildren<ScrollProps> = ({
  children,
  style = {},
  contentContainerStyle = {},
}) => {
  const styles = useStyles(theme => ({
    scroll: {
      flex: 1,
      ...getStyle(theme, style),
    },
    scrollContentContainer: {
      flexGrow: 1,
      ...getStyle(theme, contentContainerStyle),
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
