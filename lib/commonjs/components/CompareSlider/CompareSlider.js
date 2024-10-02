"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompareSlider = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _index = require("../Slider/index.js");
var _styles = require("./styles.js");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const CompareSlider = props => {
  const {
    before,
    after,
    containerSize,
    sliderSize,
    SliderComponent,
    sliderStyles,
    showSeparationLine,
    resizeMode = 'cover'
  } = props;
  const {
    width: containerWidth,
    height: containerHeight
  } = containerSize;
  const translateX = (0, _react.useRef)(new _reactNative.Animated.Value(0));
  const boxWidth = (0, _react.useRef)(_reactNative.Animated.add(translateX.current, containerWidth / 2));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: {
      width: containerWidth,
      height: containerHeight,
      overflow: 'hidden'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: {
        position: 'absolute',
        width: containerWidth,
        height: containerHeight
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Animated.View, {
        style: [_styles.styles.item, _styles.styles.itemBefore, {
          width: boxWidth.current
        }],
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
          source: typeof before === 'string' ? {
            uri: before
          } : before,
          style: {
            width: '100%',
            height: '100%'
          },
          resizeMode: resizeMode
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Animated.View, {
        style: [_styles.styles.item, _styles.styles.itemAfter, {
          left: boxWidth.current
        }],
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Animated.View, {
          style: [_styles.styles.itemAfterChild, {
            width: containerWidth
          }],
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
            source: typeof after === 'string' ? {
              uri: after
            } : after,
            style: {
              width: '100%',
              height: '100%'
            },
            resizeMode: resizeMode
          })
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Slider, {
      translateX: translateX.current,
      sliderSize: sliderSize,
      containerSize: containerSize,
      sliderStyles: sliderStyles,
      SliderComponent: SliderComponent,
      showSeparationLine: showSeparationLine
    })]
  });
};
exports.CompareSlider = CompareSlider;
//# sourceMappingURL=CompareSlider.js.map