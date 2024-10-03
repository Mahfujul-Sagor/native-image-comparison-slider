import { StyleSheet, View, Dimensions } from 'react-native';
import { CompareSlider } from '@mahfujul-sagor/native-image-comparison-slider';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {
  const height = windowHeight / 4;
  return (
    <View style={styles.container}>
      <CompareSlider
        before={'https://images.pexels.com/photos/18937872/pexels-photo-18937872/free-photo-of-residential-building-in-city.jpeg'}
        after={'https://images.pexels.com/photos/208608/pexels-photo-208608.jpeg'}
        containerSize={{ width: windowWidth, height: height }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
