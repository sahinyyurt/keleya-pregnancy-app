import React, { useEffect } from 'react';
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
import EnterNameForm from './components/EnterNameForm';
import { User, UserState, updateUserName } from '../../store/user';
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

type Props = StackScreenProps<MainParamsList, 'EnterName'>;

const EnterName = ({ navigation }: Props) => {
  const { t } = useTranslation(['enter_name']);
  const { Layout, Gutters, Images, FontSize, Colors } = useTheme();
  const dispatch = useDispatch();
  const {
    email,
    name = null,
    due = null,
    period = null,
  } = useSelector(
    (state: { user: UserState }) => state.user.activeUser as User,
  );

  useEffect(() => {
    if (name) {
      let nextScreen = '';
      if (!due) {
        nextScreen = 'EnterDue';
      } else if (!period) {
        nextScreen = 'EnterPeriod';
      } else {
        nextScreen = 'Success';
      }

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: nextScreen }],
        }),
      );
    }
  }, [name, due, period]);

  const onSubmit = (data: FieldValues) => {
    dispatch(updateUserName({ ...data, email }));
    navigation.navigate('EnterDue');
  };

  return (
    <KeyboardAvoidingView style={[Layout.fill]} behavior="padding">
      <ImageBackground
        source={Images.couch_smile}
        resizeMode="cover"
        imageStyle={{
          height: verticalScale(425),
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
              Layout.fill,
              { height: Dimensions.get('screen').height },
              Gutters.regularBPadding,
            ]}
          >
            <Text
              style={[
                Gutters.smallBMargin,
                styles.headerMessage,
                { fontSize: FontSize.biggest, color: Colors.GREYISH_BROWN },
              ]}
            >
              {t('call_you')}
            </Text>
            <EnterNameForm onSubmit={onSubmit} />
          </View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default EnterName;
