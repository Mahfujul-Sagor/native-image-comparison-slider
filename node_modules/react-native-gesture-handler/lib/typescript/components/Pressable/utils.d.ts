import { Insets, ViewStyle } from 'react-native';
import { LongPressGestureHandlerEventPayload } from '../../handlers/GestureHandlerEventPayload';
import { TouchData, GestureStateChangeEvent, GestureTouchEvent } from '../../handlers/gestureHandlerCommon';
import { HoverGestureHandlerEventPayload } from '../../handlers/gestures/hoverGesture';
import { PressableEvent } from './PressableProps';
declare const numberAsInset: (value: number) => Insets;
declare const addInsets: (a: Insets, b: Insets) => Insets;
declare const isTouchWithinInset: (dimensions: {
    width: number;
    height: number;
}, inset: Insets, touch?: TouchData) => boolean;
declare const gestureToPressableEvent: (event: GestureStateChangeEvent<HoverGestureHandlerEventPayload | LongPressGestureHandlerEventPayload>) => PressableEvent;
declare const gestureTouchToPressableEvent: (event: GestureTouchEvent) => PressableEvent;
declare const splitStyles: (from: ViewStyle) => [ViewStyle, ViewStyle];
export { numberAsInset, addInsets, isTouchWithinInset, gestureToPressableEvent, gestureTouchToPressableEvent, splitStyles, };
