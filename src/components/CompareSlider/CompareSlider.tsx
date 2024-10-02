import React, { useRef } from 'react';
import { View, Animated, Image } from 'react-native';

import { Slider } from '../Slider';
import type { ICompareSlider } from '../../types';

import { styles } from './styles';

export const CompareSlider: React.FC<ICompareSlider> = (props) => {
  const {
    before,
    after,
    containerSize,
    sliderSize,
    SliderComponent,
    sliderStyles,
    showSeparationLine,
    resizeMode = 'cover',
  } = props;

  const { width: containerWidth, height: containerHeight } = containerSize;
  const translateX = useRef(new Animated.Value(0));
  const boxWidth = useRef(Animated.add(translateX.current, containerWidth / 2));

  return (
    <View
      style={{
        width: containerWidth,
        height: containerHeight,
        overflow: 'hidden',
      }}
    >
      <View
        style={{
          position: 'absolute',
          width: containerWidth,
          height: containerHeight,
        }}
      >
        <Animated.View
          style={[styles.item, styles.itemBefore, { width: boxWidth.current }]}
        >
          <Image
            source={typeof before === 'string' ? { uri: before } : before}
            style={{ width: '100%', height: '100%' }}
            resizeMode={resizeMode}
          />
        </Animated.View>

        <Animated.View
          style={[styles.item, styles.itemAfter, { left: boxWidth.current }]}
        >
          <Animated.View
            style={[styles.itemAfterChild, { width: containerWidth }]}
          >
            <Image
              source={typeof after === 'string' ? { uri: after } : after}
              style={{ width: '100%', height: '100%' }}
              resizeMode={resizeMode}
            />
          </Animated.View>
        </Animated.View>
      </View>

      <Slider
        translateX={translateX.current}
        sliderSize={sliderSize}
        containerSize={containerSize}
        sliderStyles={sliderStyles}
        SliderComponent={SliderComponent}
        showSeparationLine={showSeparationLine}
      />
    </View>
  );
};
