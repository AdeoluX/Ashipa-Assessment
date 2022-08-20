import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PressureHumidity = ({title, value, symbol}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flex: 0.45,
      }}>
      <Text style={{fontFamily: 'DMSans-Regular'}}>{title}</Text>
      <Text style={{fontFamily: 'DMSans-Bold', color: 'black'}}>|</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontFamily: 'DMSans-Regular'}}>{value}</Text>
        <Text style={{fontFamily: 'DMSans-Bold'}}>{symbol}</Text>
      </View>
    </View>
  );
};

export default PressureHumidity;

const styles = StyleSheet.create({});
