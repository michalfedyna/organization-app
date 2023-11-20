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
  scrollable?: boolean;
  withTopBar?: boolean;
};

const Screen: FunctionComponentWithChildren<ScreenProps> = ({
  children,
  goBack,
  scrollable,
  topBarBackgroundColor,
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
    viewContainer: {
      flex: 1,
      paddingHorizontal: theme.spacing.medium,
    },
    contentContainer: {
      flex: 1,
    },
  }));

  const ViewContainer = scrollable ? KeyboardAwareScrollView : RNView;

  return (
    <RNView style={styles.container}>
      {withTopBar && (
        <TopBar
          goBack={goBack}
          style={{
            backgroundColor: topBarBackgroundColor,
            padding: 'medium',
          }}
        />
      )}
      <ViewContainer
        enableOnAndroid
        contentContainerStyle={styles.contentContainer}
        extraHeight={100}
        keyboardOpeningTime={0}
        style={styles.viewContainer}>
        {children}
      </ViewContainer>
    </RNView>
  );
};

export default Screen;
