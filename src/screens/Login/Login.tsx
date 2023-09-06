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
import LoginForm from './components/LoginForm';
import { UserState, loginUser } from '../../store/user';
import { useDispatch, useSelector } from 'react-redux';

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

const Login = () => {
  const { t } = useTranslation(['login']);
  const { Layout, Gutters, Images, FontSize, Colors, Fonts } = useTheme();
  const dispatch = useDispatch();
  const loginError = useSelector(
    (state: { user: UserState }) => state.user?.loginError,
  );

  const onSubmit = (data: FieldValues) => {
    dispatch(loginUser({ ...data }));
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
              Gutters.regularHPadding,
              Layout.justifyContentEnd,
              Gutters.regularBPadding,
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
              {t('welcome_back')}
            </Text>
            {loginError && (
              <Text
                style={[Fonts.textBold, Fonts.textCenter, Gutters.tinyBMargin]}
              >
                Your email or password is incorrect
              </Text>
            )}
            <LoginForm onSubmit={onSubmit} />
          </View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Login;
