/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { moderateScale } from 'react-native-size-matters';
import { ThemeNavigationColors } from '../../@types/theme';

/**
 * Colors
 */
export const Colors = {
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  //Typography
  textGray800: '#000000',
  textGray400: '#4D4D4D',
  textGray200: '#A1A1A1',
  primary: '#E14032',
  success: '#28a745',
  error: '#dc3545',
  //ComponentColors
  circleButtonBackground: '#E1E1EF',
  circleButtonColor: '#44427D',

  //Keleya Colors
  WHITE: '#ffffff',
  PALE_TEAL: '#69c0ba',
  LIGHT_TEAL: '#9adcd7',
  GREYISH_BROWN: '#4a4a4a',
  WARM_GREY: '#9b9b9b',
  BUBBLE_GUM: '	#e97db5',
  GREY: '#eeeef0',
  BLUE: '#007aff',
};

export const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.primary,
  background: '#EFEFEF',
  card: '##e6e8ef',
};

/**
 * FontSize
 */
export const FontSize = {
  tiny: moderateScale(10, 0.4),
  small: moderateScale(12, 0.4),
  regular: moderateScale(14, 0.4),
  big: moderateScale(16, 0.4),
  bigger: moderateScale(18, 0.4),
  biggest: moderateScale(24, 0.4),
  large: moderateScale(32, 0.4),
  larger: moderateScale(36, 0.4),
  largest: moderateScale(40, 0.4),
};

/**
 * Metrics Sizes
 */
const tiny = 10;
const small = tiny * 2; // 20
const regular = tiny * 3; // 30
const large = regular * 2; // 60
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
};

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
};
