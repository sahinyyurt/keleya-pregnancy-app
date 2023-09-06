import React, { forwardRef } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { useTheme } from '../../hooks';
import { scale, verticalScale } from 'react-native-size-matters';

type Props = TextInputProps;

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 1,
    paddingLeft: scale(20),
    paddingRight: scale(30),
    paddingBottom: verticalScale(10),
  },
});

const Input = forwardRef<TextInput, Props>(({ style, ...props }, ref) => {
  const { Colors, FontSize } = useTheme();

  return (
    <TextInput
      style={[
        styles.textInput,
        {
          fontSize: FontSize.big,
        },
        style,
      ]}
      ref={ref}
      placeholderTextColor={Colors.WARM_GREY}
      {...props}
    />
  );
});

export default Input;
