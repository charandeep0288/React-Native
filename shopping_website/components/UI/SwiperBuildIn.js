import {
  Dimensions,
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import Swiper from "react-native-web-swiper";

function SwipeSlide({ images }) {

  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        from={1}
        loop
        timeout={2.5}
        minDistanceForAction={0.1}
        controlsProps={{
          dotsTouchable: true,
          nextTitle: "",
          prevTitle: "",
        }}
      >
        {images.map((image, index) => {
          return (
            <Image
              key={index}
              resizeMode="stretch"
              style={styles.wrap}
              source={{ uri: image.url }}
            />
          );
        })}
      </Swiper>
    </SafeAreaView>
  );
}

export default SwipeSlide;

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT * 0.25,
    flex: 1,
  },

  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
});
