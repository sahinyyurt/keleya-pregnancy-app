import React, { forwardRef } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '../../hooks';
import { scale } from 'react-native-size-matters';
import BouncyCheckbox, {
  IBouncyCheckboxProps,
} from 'react-native-bouncy-checkbox';

type Props = {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
  onChange: (...event: any[]) => void;
  value: boolean;
} & IBouncyCheckboxProps;

const styles = StyleSheet.create({
  checkbox: {
    width: scale(15),
    height: scale(15),
  },
  bR5: {
    borderRadius: 5,
  },
  text: {
    textDecorationLine: 'none',
    color: '#000',
  },
});

const CustomCheckBox = forwardRef<BouncyCheckbox, Props>(
  ({ label, containerStyle, onChange, value, ...props }, ref) => {
    const { Colors, Layout, FontSize } = useTheme();

    return (
      <View style={[Layout.rowHCenter, containerStyle]}>
        <BouncyCheckbox
          ref={ref}
          size={scale(20)}
          iconStyle={styles.bR5}
          innerIconStyle={styles.bR5}
          fillColor={Colors.PALE_TEAL}
          unfillColor={Colors.WHITE}
          text={label}
          textStyle={[styles.text, { fontSize: FontSize.small }]}
          onPress={(isChecked: boolean) => {
            onChange(isChecked);
          }}
          isChecked={value}
          {...props}
        />
      </View>
    );
  },
);

CustomCheckBox.defaultProps = {
  label: '',
  containerStyle: {},
};

export default CustomCheckBox;
