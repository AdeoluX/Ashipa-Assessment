import react from 'react';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {API_KEY} from '@env';

export const COLORS = {
  //base colors
  primary: '#fff', //'#1F1931', //Blue
  secondary: '#2E30AD', //Gray

  //colors
  textColor: '#1F1931',
  black: '#1e1f20',
  white: '#ffffff',
  lightGray: '#eff2f5',
  gray: '#4F4F4F',
  line: '#e0e0e0',
};

export const SIZES = {
  //global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 5,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  //app dimensions
  width,
  height,
};

export const FONT = {
  regular: 'DMSans-Regular',
  medium: 'DMSans-Medium',
  bold: 'DMSans-Bold',
};

const URLS = {
  base_url: 'https://api.openweathermap.org/data/2.5/',
  api_key: API_KEY,
};

export {URLS};
