import React from 'react';
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useTheme } from '../../hooks';
import { useTranslation } from 'react-i18next';
import { FieldValues } from 'react-hook-form';
import EnterPeriodForm from './components/EnterPeriodForm';
import { User, UserState, updateUserDue } from '../../store/user';
import { useDispatch, useSelector } from 'react-redux';
import { verticalScale } from 'react-native-size-matters';
import { MainParamsList } from 'types/navigation';
import { StackScreenProps } from '@react-navigation/stack';
import { CommonActions } from '@react-navigation/native';

const styles = StyleSheet.create({
  headerMessage: {
    fontWeight: 'normal',
    textAlign: 'center',
  },
});

type Props = StackScreenProps<MainParamsList, 'EnterPeriod'>;

const EnterPeriod = ({ navigation }: Props) => {
  const { t } = useTranslation(['enter_period']);
  const { Layout, Gutters, Images, FontSize, Colors } = useTheme();
  const dispatch = useDispatch();
  const { email } = useSelector(
    (state: { user: UserState }) => state.user.activeUser as User,
  );

  const onSubmit = (data: FieldValues) => {
    dispatch(updateUserDue({ period: data.period, email }));
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Success' }],
      }),
    );
  };

  return (
    <ImageBackground
      source={Images.workout_goal_background}
      resizeMode="cover"
      imageStyle={{
        height: verticalScale(430),
      }}
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
          <Text
            style={[
              styles.headerMessage,
              {
                fontSize: FontSize.biggest,
                color: Colors.GREYISH_BROWN,
                marginTop: Platform.select({
                  ios: verticalScale(50),
                  android: verticalScale(100),
                }),
              },
            ]}
          >
            {t('how_many_times')}
          </Text>
          <View>
            <EnterPeriodForm onSubmit={onSubmit} />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default EnterPeriod;
