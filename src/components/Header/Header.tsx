import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../hooks';
import { StackHeaderProps } from '@react-navigation/stack';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 30,
    left: 5,
  },
  left: { width: 30, height: 15 },
});

const Header = ({ navigation }: StackHeaderProps) => {
  const { Gutters, Images } = useTheme();

  return (
    <View style={styles.container}>
      {navigation.canGoBack() && (
        <TouchableOpacity
          style={Gutters.smallPadding}
          onPress={() => navigation.goBack()}
        >
          <Image source={Images.left} style={styles.left} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
