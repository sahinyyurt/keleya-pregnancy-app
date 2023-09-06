import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../../hooks';
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { Button, Input, SecureInput } from '../../../components';
import { useTranslation } from 'react-i18next';

type Props = {
  onSubmit: SubmitHandler<FieldValues>;
};

const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  const { t } = useTranslation(['login']);
  const { Layout, Gutters, FontSize } = useTheme();
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
      <View style={[Layout.center, Gutters.largeTMargin]}>
        <TouchableOpacity style={[Gutters.tinyBMargin, Gutters.largeTMargin]}>
          <Text style={[{ fontSize: FontSize.bigger }]}>
            {t('forgot_pass')}
          </Text>
        </TouchableOpacity>
        <Button
          text={t('login')}
          disabled={!isValid}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </>
  );
};

export default LoginForm;
