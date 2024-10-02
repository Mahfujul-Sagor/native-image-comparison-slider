import React from 'react';
import { Animated, type ViewStyle } from 'react-native';
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
    before: React.ReactNode;
    after: React.ReactNode;
    containerSize: ISize;
    sliderSize?: ISize;
    SliderComponent?: React.ReactNode;
    sliderStyles?: ViewStyle;
    showSeparationLine?: boolean;
    separationLineStyles?: ViewStyle;
}
//# sourceMappingURL=types.d.ts.map