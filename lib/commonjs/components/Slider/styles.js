"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var _reactNative = require("react-native");
var _constants = require("../../utils/constants.js");
const styles = exports.styles = _reactNative.StyleSheet.create({
  animatedView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  slider: {
    alignItems: 'center',
    backgroundColor: '#f5f6fa80',
    borderRadius: _constants.SLIDER_SIZE / 2,
    justifyContent: 'center'
  },
  sliderArrow: {
    width: _constants.SLIDER_ARROW_SIZE,
    height: _constants.SLIDER_ARROW_SIZE,
    position: 'absolute',
    borderTopWidth: _constants.SLIDER_ARROW_SIZE,
    borderTopColor: 'transparent',
    borderBottomWidth: _constants.SLIDER_ARROW_SIZE,
    borderBottomColor: 'transparent'
  },
  sliderArrowRight: {
    right: 8,
    borderLeftWidth: _constants.SLIDER_ARROW_SIZE,
    borderLeftColor: 'black'
  },
  sliderArrowLeft: {
    left: 8,
    borderRightWidth: _constants.SLIDER_ARROW_SIZE,
    borderRightColor: 'black'
  },
  separationLine: {
    backgroundColor: '#f5f6fa80',
    width: 5,
    position: 'absolute'
  }
});
//# sourceMappingURL=styles.js.map