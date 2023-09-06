import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme, useToggle } from '../../hooks';
import { scale } from 'react-native-size-matters';
import dayjs from 'dayjs';
import DateTimePickerModal, {
  ReactNativeModalDateTimePickerProps,
} from 'react-native-modal-datetime-picker';

const DatePicker: FC<ReactNativeModalDateTimePickerProps> = ({
  onCancel,
  onConfirm,
  date,
  ...props
}) => {
  const { Layout, Gutters, Colors, FontSize } = useTheme();
  const [show, toggleShow] = useToggle(false);
  return (
    <View style={[Layout.center]}>
      <TouchableOpacity
        onPress={() => toggleShow()}
        style={[
          Layout.center,
          Gutters.tinyPadding,
          {
            backgroundColor: Colors.GREY,
            borderRadius: scale(5),
          },
        ]}
      >
        <Text style={[{ color: Colors.BLUE, fontSize: FontSize.bigger }]}>
          {dayjs(date).format('MMM DD, YYYY')}
        </Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={show}
        date={date}
        onCancel={() => {
          toggleShow();
          onCancel();
        }}
        onConfirm={(_date: Date) => {
          toggleShow();
          onConfirm(_date);
        }}
        {...props}
      />
    </View>
  );
};

export default DatePicker;
