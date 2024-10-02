"use strict";

import React, { useRef } from 'react';
import { View, Animated } from 'react-native';
import { Slider } from "../Slider/index.js";
import { styles } from "./styles.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const CompareSlider = props => {
  const {
    before,
    after,
    containerSize,
    sliderSize,
    SliderComponent,
    sliderStyles,
    showSeparationLine
  } = props;
  const {
    width: containerWidth,
    height: containerHeight
  } = containerSize;
  const translateX = useRef(new Animated.Value(0));
  const boxWidth = useRef(Animated.add(translateX.current, containerWidth / 2));
  return /*#__PURE__*/_jsxs(View, {
    style: [{
      width: containerWidth,
      height: containerHeight,
      overflow: 'hidden'
    }],
    children: [/*#__PURE__*/_jsxs(View, {
      style: {
        position: 'absolute',
        width: containerWidth,
        height: containerHeight
      },
      children: [/*#__PURE__*/_jsx(Animated.View, {
        style: [styles.item, styles.itemBefore, {
          width: boxWidth.current
        }],
        children: before
      }), /*#__PURE__*/_jsx(Animated.View, {
        style: [styles.item, styles.itemAfter, {
          left: boxWidth.current
        }],
        children: /*#__PURE__*/_jsx(Animated.View, {
          style: [styles.itemAfterChild, {
            width: containerWidth
          }],
          children: after
        })
      })]
    }), /*#__PURE__*/_jsx(Slider, {
      translateX: translateX.current,
      sliderSize: sliderSize,
      containerSize: containerSize,
      sliderStyles: sliderStyles,
      SliderComponent: SliderComponent,
      showSeparationLine: showSeparationLine
    })]
  });
};
//# sourceMappingURL=CompareSlider.js.map