import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../../../hooks';
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { Button, CheckBox, Input, SecureInput } from '../../../components';
import { useTranslation } from 'react-i18next';

type Props = {
  onSubmit: SubmitHandler<FieldValues>;
};

const RegisterForm: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation(['register']);
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
      <View style={[Gutters.regularBMargin]}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="email@gmail.com"
              style={[Gutters.regularBMargin]}
              onBlur={onBlur}
              onChangeText={_value => onChange(_value)}
              value={value}
            />
          )}
          name="email"
          rules={{
            required: true,
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          }}
        />

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <SecureInput
              placeholder={t('enter_pass')}
              onBlur={onBlur}
              onChangeText={_value => onChange(_value)}
              value={value}
            />
          )}
          name="password"
          rules={{
            required: true,
            minLength: 6,
          }}
        />
      </View>
      <View style={Gutters.largeBMargin}>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <CheckBox
              label={t('policy')}
              containerStyle={Gutters.tinyBMargin}
              onChange={onChange}
              value={value}
            />
          )}
          name="policy"
          rules={{
            required: true,
            validate: _value => _value,
          }}
        />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <CheckBox
              label={t('terms')}
              containerStyle={Gutters.tinyBMargin}
              onChange={onChange}
              value={value}
            />
          )}
          name="terms"
          rules={{
            required: true,
            validate: _value => _value,
          }}
        />
      </View>
      <View style={[Layout.center, Gutters.smallTMargin]}>
        <Button
          text={t('create_account')}
          disabled={!isValid}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </>
  );
};

export default RegisterForm;
