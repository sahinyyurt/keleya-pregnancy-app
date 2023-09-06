import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../../../hooks';
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { Button } from '../../../components';
import { useTranslation } from 'react-i18next';
import { Picker } from '@react-native-picker/picker';

type Props = {
  onSubmit: SubmitHandler<FieldValues>;
};

const EnterPeriodForm: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation(['enter_period']);
  const { Layout, Gutters } = useTheme();
  const {
    handleSubmit,
    formState: { isValid },
    control,
  } = useForm({
    mode: 'onBlur',
  });

  return (
    <>
      <View style={Gutters.smallBMargin}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Picker
              selectedValue={value}
              onValueChange={itemValue => {
                onChange(itemValue);
              }}
              onBlur={onBlur}
            >
              {[1, 2, 3, 4, 5, 6, 7].map(x => (
                <Picker.Item
                  key={`period_${x}`}
                  label={
                    x === 1 ? t('once_week') : `${x} ${t('times_a_weeek')}`
                  }
                  value={x}
                />
              ))}
            </Picker>
          )}
          name="period"
          defaultValue={3}
          rules={{
            required: true,
          }}
        />
      </View>
      <View style={[Layout.center, Gutters.tinyTMargin]}>
        <Button
          text={t('continue')}
          disabled={!isValid}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </>
  );
};

export default EnterPeriodForm;
