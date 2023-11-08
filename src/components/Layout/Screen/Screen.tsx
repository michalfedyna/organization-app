import React from 'react';
import {View as RNView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {TopBar} from '@components';
import {KeyofColorTheme, useStyles} from '@styles';
import {FunctionComponentWithChildren} from '@types';

type ScreenProps = {
  goBack?: () => void;
  topBarBackgroundColor?: KeyofColorTheme;
  withInput?: boolean;
  withTopBar?: boolean;
};

const Screen: FunctionComponentWithChildren<ScreenProps> = ({
  children,
  goBack,
  topBarBackgroundColor,
  withInput,
  withTopBar,
}) => {
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
    contentContainer: {
      flex: 1,
    },
  }));

  if (withInput)
    return (
      <KeyboardAwareScrollView
        enableOnAndroid
        contentContainerStyle={styles.contentContainer}
        style={styles.container}>
        {withTopBar && (
          <TopBar backgroundColor={topBarBackgroundColor} goBack={goBack} />
        )}
        {children}
      </KeyboardAwareScrollView>
    );

  return (
    <RNView style={styles.container}>
      {withTopBar && (
        <TopBar backgroundColor={topBarBackgroundColor} goBack={goBack} />
      )}
      {children}
    </RNView>
  );
};

export default Screen;
