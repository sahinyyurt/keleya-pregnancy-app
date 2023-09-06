import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../../../hooks';
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { Button, Input } from '../../../components';
import { useTranslation } from 'react-i18next';

type Props = {
  onSubmit: SubmitHandler<FieldValues>;
};

const EnterNameForm: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation(['enter_name']);
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
      <View>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder={t('name_field')}
              style={[Gutters.tinyBMargin]}
              onBlur={onBlur}
              onChangeText={_value => onChange(_value)}
              value={value}
            />
          )}
          name="name"
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

export default EnterNameForm;
