import React, {FC, PropsWithChildren} from 'react';
import {
  TouchableOpacity as RNTouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';

type TouchableProps = PropsWithChildren<{
  disabled?: boolean;
  onLongPress?: () => void;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}>;

const Touchable: FC<TouchableProps> = ({
  children,
  style,
  onPress,
  onLongPress,
  disabled,
}) => {
  return (
    <RNTouchableOpacity
      disabled={disabled}
      style={style}
      onLongPress={onLongPress}
      onPress={onPress}>
      {children}
    </RNTouchableOpacity>
  );
};

export default Touchable;

// TODO debounce
