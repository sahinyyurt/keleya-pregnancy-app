import React, { useCallback, useEffect } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useTheme } from '../../hooks';
import { Brand, Button, Dots } from '../../components';
import { ApplicationScreenProps } from '../../../@types/navigation';
import { scale } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { logoutUser } from '@/store/user';

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

const Intro = ({ navigation }: ApplicationScreenProps) => {
  const { t } = useTranslation(['intro']);
  const { Layout, Gutters, Images, FontSize, Colors } = useTheme();

  const onGetStartedPressed = useCallback(() => {
    navigation.navigate('Register');
  }, [navigation]);

  const onLoginPressed = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logoutUser());
  }, []);

  return (
    <ImageBackground
      source={Images.first_intro}
      resizeMode="cover"
      style={Layout.fill}
    >
      <SafeAreaView style={[Layout.fill]}>
        <View style={[Gutters.smallHMargin, Layout.scrollSpaceBetween]}>
          <View style={[Layout.center, Gutters.smallTMargin]}>
            <Brand width={scale(100)} height={scale(100)} />
            <Text
              testID="welcome"
              style={[
                Gutters.tinyTMargin,
                styles.headerMessage,
                { fontSize: FontSize.biggest, color: Colors.GREYISH_BROWN },
              ]}
            >
              {t('title')}
            </Text>
          </View>
          <View style={Layout.center}>
            <Button
              text={t('get_started')}
              onPress={onGetStartedPressed}
              testID="register"
            />
            <TouchableOpacity
              style={[Gutters.smallTMargin]}
              onPress={onLoginPressed}
              testID="login"
            >
              <Text style={[styles.loginBtn, { fontSize: FontSize.big }]}>
                {t('or_login')}
              </Text>
            </TouchableOpacity>
            <Dots />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Intro;
