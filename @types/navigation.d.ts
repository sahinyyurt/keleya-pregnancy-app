import { NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

export type MainParamsList = {
  EnterName: undefined;
  EnterDue: undefined;
  EnterPeriod: undefined;
  Success: undefined;
};

export type ApplicationStackParamList = {
  Intro: undefined;
  Register: undefined;
  Login: undefined;
  Main: NavigatorScreenParams<MainParamsList>;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;
