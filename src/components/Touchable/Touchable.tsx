import React, {FC, PropsWithChildren} from 'react';
import {
  TouchableOpacity as RNTouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';

type TouchableProps = PropsWithChildren<{
  isDisabled?: boolean;
  onLongPress?: () => void;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}>;

const Touchable: FC<TouchableProps> = ({
  children,
  style,
  onPress,
  onLongPress,
  isDisabled,
}) => {
  return (
    <RNTouchableOpacity
      disabled={isDisabled}
      style={style}
      onLongPress={onLongPress}
      onPress={onPress}>
      {children}
    </RNTouchableOpacity>
  );
};

export default Touchable;

// TODO debounce
