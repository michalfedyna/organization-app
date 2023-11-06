import React, {FC, PropsWithChildren} from 'react';
import {
  StyleProp,
  TouchableOpacity as RNTouchableOpacity,
  ViewStyle,
} from 'react-native';

type TouchableProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
  isDisabled?: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
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
      style={style}
      disabled={isDisabled}
      onPress={onPress}
      onLongPress={onLongPress}>
      {children}
    </RNTouchableOpacity>
  );
};

export default Touchable;

// TODO debounce
