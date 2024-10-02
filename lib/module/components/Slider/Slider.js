"use strict";

import React, { useCallback, useRef } from 'react';
import { Animated, View } from 'react-native';
import { PanGestureHandler, State, GestureHandlerRootView } from 'react-native-gesture-handler';
import { DEFAULT_SLIDER_SIZE } from "../../utils/constants.js";
import { styles } from "./styles.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const initialAnimatedValue = new Animated.Value(0);
const DefaultSlider = ({
  sliderSize = DEFAULT_SLIDER_SIZE,
  sliderStyles
}) => {
  return /*#__PURE__*/_jsxs(View, {
    style: [styles.slider, sliderStyles, sliderSize],
    children: [/*#__PURE__*/_jsx(View, {
      style: [styles.sliderArrow, styles.sliderArrowRight]
    }), /*#__PURE__*/_jsx(View, {
      style: [styles.sliderArrow, styles.sliderArrowLeft]
    })]
  });
};
export const Slider = props => {
  const {
    containerSize: {
      height: containerHeight
    },
    translateX = initialAnimatedValue,
    sliderSize = DEFAULT_SLIDER_SIZE,
    sliderStyles,
    showSeparationLine = true,
    separationLineStyles,
    SliderComponent = /*#__PURE__*/_jsx(DefaultSlider, {
      sliderSize: sliderSize,
      sliderStyles: sliderStyles
    })
  } = props;
  const lastOffsetX = useRef(0);
  const onPanGestureEvent = Animated.event([{
    nativeEvent: {
      translationX: translateX
    }
  }], {
    useNativeDriver: false
  });
  const onHandlerStateChange = useCallback(event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      lastOffsetX.current += event.nativeEvent.translationX;
      translateX.setOffset(lastOffsetX.current);
      translateX.setValue(0);
    }
  }, [translateX]);
  return /*#__PURE__*/_jsx(GestureHandlerRootView, {
    children: /*#__PURE__*/_jsx(PanGestureHandler, {
      activeOffsetX: [-0, 0],
      onGestureEvent: onPanGestureEvent,
      onHandlerStateChange: onHandlerStateChange,
      children: /*#__PURE__*/_jsxs(Animated.View, {
        style: [sliderSize, styles.animatedView, {
          transform: [{
            translateX
          }]
        }],
        pointerEvents: "box-only",
        children: [showSeparationLine && /*#__PURE__*/_jsx(View, {
          style: [styles.separationLine, {
            height: containerHeight
          }, separationLineStyles]
        }), SliderComponent]
      })
    })
  });
};
//# sourceMappingURL=Slider.js.map