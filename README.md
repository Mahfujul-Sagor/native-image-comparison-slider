# Native Image Comparison Slider

Compare any two images side by side in your React Native app.

![Example](./example/assets/example.gif)

## Installation

To install the package, run the following command:

```
npm install native-image-comparison-slider
```

## Props

| Prop                   | Type                                 | Required | Default Value                       | Description                                    |
| ---------------------- | ------------------------------------ | :------: | ----------------------------------- | ---------------------------------------------- |
| `before`               | `ImageSourcePropType or string`       |    ✓     | `undefined`                         | The first image to display in the slider.      |
| `after`                | `ImageSourcePropType or string`       |    ✓     | `undefined`                         | The second image to display in the slider.     |
| `containerSize`        | `{ width: number; height: number; }` |    ✓     | `{ width: '100%', height: '100%' }` | Dimensions of the container.                   |
| `sliderSize`           | `{ width: number; height: number; }` |          | `{ width: 50, height: 50 }`         | Dimensions of the slider's handle.             |
| `SliderComponent`      | `ReactNode`                          |          | `undefined`                         | Custom component for the slider's handle.      |
| `sliderStyles`         | `ViewStyle`                          |          | `undefined`                         | Styles for the slider's handle.                |
| `showSeparationLine`   | `boolean`                            |          | `undefined`                         | Whether to show the separation line.           |
| `separationLineStyles` | `ViewStyle`                          |          | `undefined`                         | Styles for the separation line.                |
| `resizeMode`           | `ImageResizeMode`                   |          | `'cover'`                           | How to resize the image when the frame does not match its size. |

## Usage

Here's a basic example of how to use the `CompareSlider` component:

```jsx
import { CompareSlider } from 'native-image-comparison-slider';

const beforeImage = require('./path/to/beforeImage.png');
const afterImage = require('./path/to/afterImage.png');

<CompareSlider
  before={beforeImage}
  after={afterImage}
  containerSize={{ width: 350, height: 100 }}
/>;
```

## Contributing

If you'd like to contribute, check out the [contributing guide](CONTRIBUTING.md) for more information on the development workflow and how to get involved.

## License

This project is licensed under the MIT License.

---

Created using [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
