import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from '../../hooks';
import { useTranslation } from 'react-i18next';
import { MainParamsList } from 'types/navigation';
import { StackScreenProps } from '@react-navigation/stack';
import { Button } from '@/components';
import { scale } from 'react-native-size-matters';
import { logoutUser } from '@/store/user';
import { useDispatch } from 'react-redux';

const styles = StyleSheet.create({
  headerMessage: {
    fontWeight: 'normal',
    textAlign: 'center',
  },
  bell: { width: scale(60), height: scale(65) },
});

type Props = StackScreenProps<MainParamsList, 'Success'>;

const Success = (_props: Props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation(['success']);
  const { Layout, Gutters, Images, FontSize, Colors } = useTheme();

  return (
    <ImageBackground
      source={Images.notifications_background}
      resizeMode="cover"
      style={[Layout.fill, { backgroundColor: Colors.WHITE }]}
    >
      <SafeAreaView style={[Layout.fill]}>
        <View
          style={[
            Gutters.regularHPadding,
            Layout.scrollSpaceBetween,
            Layout.fill,
          ]}
        >
          <View style={Layout.center}>
            <Image
              source={Images.bell}
              style={[styles.bell, Gutters.regularTMargin]}
            />
            <Text
              style={[
                Gutters.smallTMargin,
                styles.headerMessage,
                { fontSize: FontSize.biggest, color: Colors.GREYISH_BROWN },
              ]}
            >
              {t('get_notfiy')}
            </Text>
          </View>
          <View style={[Layout.center]}>
            <TouchableOpacity
              style={Gutters.smallBMargin}
              onPress={() => dispatch(logoutUser())}
            >
              <Text style={{ fontSize: FontSize.big }}>{t('skip')}</Text>
            </TouchableOpacity>
            <Button text={t('allow_notify')} />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Success;
