import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {backArrow, SIZES} from '../assets';
import {menuIcon} from '../assets/images';

const Header = () => {
  return (
    <View
      style={{flex: 0.05, padding: SIZES.padding, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: SIZES.width * 0.95,
          }}>
          <TouchableOpacity>
            <Image source={backArrow} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={menuIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
