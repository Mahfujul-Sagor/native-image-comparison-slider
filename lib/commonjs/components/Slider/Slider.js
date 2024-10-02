"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _constants = require("../../utils/constants.js");
var _styles = require("./styles.js");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const initialAnimatedValue = new _reactNative.Animated.Value(0);
const DefaultSlider = ({
  sliderSize = _constants.DEFAULT_SLIDER_SIZE,
  sliderStyles
}) => {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [_styles.styles.slider, sliderStyles, sliderSize],
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [_styles.styles.sliderArrow, _styles.styles.sliderArrowRight]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [_styles.styles.sliderArrow, _styles.styles.sliderArrowLeft]
    })]
  });
};
const Slider = props => {
  const {
    containerSize: {
      height: containerHeight
    },
    translateX = initialAnimatedValue,
    sliderSize = _constants.DEFAULT_SLIDER_SIZE,
    sliderStyles,
    showSeparationLine = true,
    separationLineStyles,
    SliderComponent = /*#__PURE__*/(0, _jsxRuntime.jsx)(DefaultSlider, {
      sliderSize: sliderSize,
      sliderStyles: sliderStyles
    })
  } = props;
  const lastOffsetX = (0, _react.useRef)(0);
  const onPanGestureEvent = _reactNative.Animated.event([{
    nativeEvent: {
      translationX: translateX
    }
  }], {
    useNativeDriver: false
  });
  const onHandlerStateChange = (0, _react.useCallback)(event => {
    if (event.nativeEvent.oldState === _reactNativeGestureHandler.State.ACTIVE) {
      lastOffsetX.current += event.nativeEvent.translationX;
      translateX.setOffset(lastOffsetX.current);
      translateX.setValue(0);
    }
  }, [translateX]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeGestureHandler.GestureHandlerRootView, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeGestureHandler.PanGestureHandler, {
      activeOffsetX: [-0, 0],
      onGestureEvent: onPanGestureEvent,
      onHandlerStateChange: onHandlerStateChange,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.Animated.View, {
        style: [sliderSize, _styles.styles.animatedView, {
          transform: [{
            translateX
          }]
        }],
        pointerEvents: "box-only",
        children: [showSeparationLine && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
          style: [_styles.styles.separationLine, {
            height: containerHeight
          }, separationLineStyles]
        }), SliderComponent]
      })
    })
  });
};
exports.Slider = Slider;
//# sourceMappingURL=Slider.js.map