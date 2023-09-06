import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../../../hooks';
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { Button, DatePicker } from '../../../components';
import { useTranslation } from 'react-i18next';

type Props = {
  onSubmit: SubmitHandler<FieldValues>;
};

const EnterDueForm: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation(['enter_due']);
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
      <View style={Gutters.regularBMargin}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <DatePicker
              onConfirm={onChange}
              onCancel={onBlur}
              date={value || new Date()}
              mode="date"
            />
          )}
          name="due"
          rules={{
            required: true,
          }}
        />
      </View>
      <View style={[Layout.center, Gutters.regularTMargin]}>
        <Button
          text={t('continue')}
          disabled={!isValid}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </>
  );
};

export default EnterDueForm;
