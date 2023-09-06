import { StyleSheet } from 'react-native';
import { Gutters, ThemeVariables } from '../../@types/theme';
import { scale, verticalScale } from 'react-native-size-matters';

/**
 * Generate Styles depending on MetricsSizes vars availabled at ./theme/Variables
 * Styles are like :
 * <size><direction><op>: {
 *    <op><direction>: <value>
 * }
 * where:
 * <size>: is the key of the variable included in MetricsSizes
 * <direction>: can be ['Bottom','Top','Right','Left','Horizontal','Vertical']
 * <op>: can be ['Margin', 'Padding']
 * <value>: is the value of the <size>
 */
export default function ({ MetricsSizes }: ThemeVariables): Gutters {
  return StyleSheet.create(
    Object.entries(MetricsSizes).reduce(
      (acc, [key, value]) => ({
        ...acc,
        /* Margins */
        [`${key}Margin`]: {
          margin: scale(value),
        },
        [`${key}BMargin`]: {
          marginBottom: verticalScale(value),
        },
        [`${key}TMargin`]: {
          marginTop: verticalScale(value),
        },
        [`${key}RMargin`]: {
          marginRight: scale(value),
        },
        [`${key}LMargin`]: {
          marginLeft: scale(value),
        },
        [`${key}VMargin`]: {
          marginVertical: verticalScale(value),
        },
        [`${key}HMargin`]: {
          marginHorizontal: scale(value),
        },
        /* Paddings */
        [`${key}Padding`]: {
          padding: scale(value),
        },
        [`${key}BPadding`]: {
          paddingBottom: verticalScale(value),
        },
        [`${key}TPadding`]: {
          paddingTop: verticalScale(value),
        },
        [`${key}RPadding`]: {
          paddingRight: scale(value),
        },
        [`${key}LPadding`]: {
          paddingLeft: scale(value),
        },
        [`${key}VPadding`]: {
          paddingVertical: verticalScale(value),
        },
        [`${key}HPadding`]: {
          paddingHorizontal: scale(value),
        },
      }),
      {},
    ) as Gutters,
  );
}
