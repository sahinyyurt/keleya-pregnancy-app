import React, { forwardRef } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { useTheme } from '../../hooks';
import { scale } from 'react-native-size-matters';

type Props =
  | {
      activeDot?: number;
    } & ViewProps;

const styles = StyleSheet.create({
  dot: {
    width: scale(10),
    height: scale(10),
    borderRadius: scale(10),
    marginRight: scale(5),
  },
});

const Dots = forwardRef<View, Props>(({ activeDot, ...props }, ref) => {
  const { Colors, Layout, Gutters } = useTheme();

  return (
    <View style={[Layout.row, Gutters.smallTMargin]} ref={ref} {...props}>
      {[0, 1, 2].map((x: number) => {
        const opacity = activeDot === x ? 1 : 0.5;
        return (
          <View
            key={`dot_${x}`}
            style={[
              styles.dot,
              {
                backgroundColor: Colors.PALE_TEAL,
                opacity,
              },
            ]}
          />
        );
      })}
    </View>
  );
});

Dots.defaultProps = {
  activeDot: 0,
};

export default Dots;
