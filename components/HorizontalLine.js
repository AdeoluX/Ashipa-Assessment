import {StyleSheet, Text, View} from 'react-native';

import React from 'react';
import {SIZES} from '../assets';

const HorizontalLine = () => {
  return (
    <View
      style={{
        backgroundColor: '#e0e0e0',
        width: SIZES.width,
        height: 1,
      }}></View>
  );
};

export default HorizontalLine;

const styles = StyleSheet.create({});
