import React from 'react';
import {
  Animated,
  type ViewStyle,
  type ImageSourcePropType,
  type ImageResizeMode,
} from 'react-native';

export interface ISize {
  width: number;
  height: number;
}

export interface IDefaultSliderProps {
  sliderSize?: ISize;
  sliderStyles?: ViewStyle;
}

export interface ISliderProps extends IDefaultSliderProps {
  translateX: Animated.Value;
  SliderComponent?: React.ReactNode;
  containerSize: ISize;
  showSeparationLine?: boolean;
  separationLineStyles?: ViewStyle;
}

export interface ICompareSlider {
  before: ImageSourcePropType | string;
  after: ImageSourcePropType | string;
  containerSize: ISize;

  sliderSize?: ISize;
  SliderComponent?: React.ReactNode;
  sliderStyles?: ViewStyle;

  showSeparationLine?: boolean;
  separationLineStyles?: ViewStyle;

  resizeMode?: ImageResizeMode;
}
