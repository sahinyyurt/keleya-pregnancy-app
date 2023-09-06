import React, { forwardRef } from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme, useToggle } from '../../hooks';
import { scale, verticalScale } from 'react-native-size-matters';

type Props = TextInputProps;

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 1,
    paddingLeft: scale(20),
    paddingRight: scale(30),
    paddingBottom: verticalScale(10),
    color: '#000',
  },
  container: { position: 'relative' },
  eye: {
    flex: 1,
    position: 'absolute',
    bottom: verticalScale(10),
    right: 5,
    zIndex: 10,
    width: scale(20),
    height: scale(13),
  },
  eyeImg: { width: '100%', height: '100%', resizeMode: 'cover' },
});

const SecureInput = forwardRef<TextInput, Props>(({ style, ...props }, ref) => {
  const { Colors, FontSize, Images } = useTheme();
  const [isSecure, toggleIsSecure] = useToggle(true);

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.textInput,
          {
            fontSize: FontSize.big,
          },
          style,
        ]}
        ref={ref}
        secureTextEntry={isSecure}
        placeholderTextColor={Colors.WARM_GREY}
        {...props}
      />
      <TouchableOpacity style={styles.eye} onPress={() => toggleIsSecure()}>
        <Image
          source={isSecure ? Images.eye : Images.eye_off}
          resizeMode="cover"
          style={styles.eyeImg}
        />
      </TouchableOpacity>
    </View>
  );
});

export default SecureInput;
