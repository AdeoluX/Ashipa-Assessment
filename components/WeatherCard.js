import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {cloudImage} from '../assets/images';

const WeatherCard = ({weather_icon, time, temperature}) => {
  const formatAMPM = () => {
    const str_hr = time.split(' ')[1];
    let num_hr = Number(str_hr.split(':')[0]);
    const ampm = num_hr >= 12 ? 'pm' : 'am';

    num_hr %= 12;
    num_hr = num_hr || 12;

    const strTime = `${num_hr}${ampm}`;

    return strTime;
  };
  return (
    <View
      style={{alignItems: 'center', justifyContent: 'center', marginRight: 24}}>
      {/* Card */}
      <View
        style={{
          width: 98,
          height: 98,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f0f1f9',
          borderRadius: 10,
          marginBottom: 8,
        }}>
        <Image
          source={{uri: `http://openweathermap.org/img/wn/${weather_icon}.png`}}
          style={{height: 56, width: 56}}
        />
      </View>
      <Text
        style={{
          marginBottom: 20,
          fontSize: 18,
          fontFamily: 'DMSans-Medium',
          color: '#4f4f4f',
        }}>
        {formatAMPM()}
      </Text>
      <Text style={{fontSize: 32, fontFamily: 'DMSans-Bold', color: '#2e30ad'}}>
        {Math.round(Number(temperature))}°c
      </Text>
    </View>
  );
};

export default WeatherCard;

const styles = StyleSheet.create({});
