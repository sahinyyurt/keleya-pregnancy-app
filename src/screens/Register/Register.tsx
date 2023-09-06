import React from 'react';
import {
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useTheme } from '../../hooks';
import { useTranslation } from 'react-i18next';
import { FieldValues } from 'react-hook-form';
import RegisterForm from './components/RegisterForm';
import { registerUser } from '../../store/user';
import { useDispatch } from 'react-redux';

const styles = StyleSheet.create({
  headerMessage: {
    fontWeight: 'normal',
    textAlign: 'center',
  },
  loginBtn: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const Register = () => {
  const { t } = useTranslation(['register']);
  const { Layout, Gutters, Images, FontSize, Colors } = useTheme();
  const dispatch = useDispatch();

  const onSubmit = (data: FieldValues) => {
    dispatch(registerUser({ ...data }));
  };

  return (
    <KeyboardAvoidingView style={[Layout.fill]} behavior="padding">
      <ImageBackground
        source={Images.authentication_background}
        resizeMode="cover"
        imageStyle={{
          height: Dimensions.get('window').width,
        }}
        style={[Layout.fill, { backgroundColor: Colors.WHITE }]}
      >
        <ScrollView
          style={[Layout.fill, Gutters.regularBPadding]}
          keyboardShouldPersistTaps="handled"
        >
          <View
            style={[
              Gutters.smallHPadding,
              Gutters.regularBPadding,
              Layout.justifyContentEnd,
              Layout.fill,
              { height: Dimensions.get('screen').height },
            ]}
          >
            <Text
              style={[
                Gutters.regularBMargin,
                styles.headerMessage,
                { fontSize: FontSize.biggest, color: Colors.GREYISH_BROWN },
              ]}
            >
              {t('add_your_details')}
            </Text>
            <RegisterForm onSubmit={onSubmit} />
          </View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Register;
