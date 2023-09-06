import React, { forwardRef } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';
import { useTheme } from '../../hooks';
import { scale, verticalScale } from 'react-native-size-matters';

type Props =
  | {
      text?: string;
    } & TouchableOpacityProps;

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: scale(48),
    paddingVertical: verticalScale(10),
    borderRadius: scale(8),
  },
});

const Button = forwardRef<TouchableOpacity, Props>(
  ({ text, disabled, ...props }, ref) => {
    const { Colors, FontSize } = useTheme();

    return (
      <TouchableOpacity
        ref={ref}
        disabled={disabled}
        style={[
          styles.btn,
          {
            backgroundColor: disabled ? Colors.WARM_GREY : Colors.PALE_TEAL,
          },
        ]}
        activeOpacity={0.8}
        {...props}
      >
        <Text style={[{ fontSize: FontSize.biggest, color: Colors.WHITE }]}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  },
);

Button.defaultProps = {
  text: 'Button',
};

export default Button;
