"use strict";

import { StyleSheet } from 'react-native';
import { SLIDER_ARROW_SIZE, SLIDER_SIZE } from "../../utils/constants.js";
export const styles = StyleSheet.create({
  animatedView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  slider: {
    alignItems: 'center',
    backgroundColor: '#f5f6fa',
    borderRadius: SLIDER_SIZE / 2,
    justifyContent: 'center'
  },
  sliderArrow: {
    width: SLIDER_ARROW_SIZE,
    height: SLIDER_ARROW_SIZE,
    position: 'absolute',
    borderTopWidth: SLIDER_ARROW_SIZE,
    borderTopColor: 'transparent',
    borderBottomWidth: SLIDER_ARROW_SIZE,
    borderBottomColor: 'transparent'
  },
  sliderArrowRight: {
    right: 8,
    borderLeftWidth: SLIDER_ARROW_SIZE,
    borderLeftColor: 'black'
  },
  sliderArrowLeft: {
    left: 8,
    borderRightWidth: SLIDER_ARROW_SIZE,
    borderRightColor: 'black'
  },
  separationLine: {
    backgroundColor: '#f5f6fa',
    width: 5,
    position: 'absolute'
  }
});
//# sourceMappingURL=styles.js.map