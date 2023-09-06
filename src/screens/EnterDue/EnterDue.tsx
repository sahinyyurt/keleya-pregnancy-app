import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useTheme } from '../../hooks';
import { useTranslation } from 'react-i18next';
import { FieldValues } from 'react-hook-form';
import EnterDueForm from './components/EnterDueForm';
import { User, UserState, updateUserDue } from '../../store/user';
import { useDispatch, useSelector } from 'react-redux';
import { verticalScale } from 'react-native-size-matters';
import { MainParamsList } from 'types/navigation';
import { StackScreenProps } from '@react-navigation/stack';

const styles = StyleSheet.create({
  headerMessage: {
    fontWeight: 'normal',
    textAlign: 'center',
  },
});

type Props = StackScreenProps<MainParamsList, 'EnterDue'>;

const EnterDue = ({ navigation }: Props) => {
  const { t } = useTranslation(['enter_due']);
  const { Layout, Gutters, Images, FontSize, Colors } = useTheme();
  const dispatch = useDispatch();
  const { email, name } = useSelector(
    (state: { user: UserState }) => state.user.activeUser as User,
  );

  const onSubmit = (data: FieldValues) => {
    dispatch(updateUserDue({ due: data.due.toISOString(), email }));
    navigation.navigate('EnterPeriod');
  };

  return (
    <ImageBackground
      source={Images.due_date_background}
      resizeMode="cover"
      imageStyle={{
        height: verticalScale(520),
      }}
      style={[Layout.fill, { backgroundColor: Colors.WHITE }]}
    >
      <SafeAreaView style={[Layout.fill]}>
        <View
          style={[
            Gutters.regularHPadding,
            Layout.justifyContentEnd,
            Layout.fill,
          ]}
        >
          <Text
            style={[
              Gutters.smallBMargin,
              styles.headerMessage,
              { fontSize: FontSize.biggest, color: Colors.GREYISH_BROWN },
            ]}
          >
            {t('when_due')} {name}?
          </Text>
          <EnterDueForm onSubmit={onSubmit} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default EnterDue;
