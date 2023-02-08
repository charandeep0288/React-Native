import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  Text,
  Image,
} from "react-native";

// View -> UIView
export default function App() {
  let x = 1;

  // console.log("App executed");
  // console.log(require("./assets/icon.png")); // returns a number that is refernce to ower <Image>
  const handlePress = () => console.log("Text Clicked!");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text numberOfLines={1} onPress={handlePress}>
        app Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        accusamus consequuntur velit quibusdam beatae
      </Text>
      <TouchableNativeFeedback onPress={() => console.log("Imaage Tapped")}>
        {/* TouchableNativeFeedback doesn't work with Images */}
        <View
          style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}
        ></View>
        {/* <Image
          // blurRadius={10}
          // fadeDuration={2000}
          style={styles.textImage}
          source={{
            uri: "https://picsum.photos/200/300",
          }}
        /> */}
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  textImage: {
    height: 300,
    width: 200,
  },
});

// App URL
// exp://exp.host/@charandeep2000/DoneWithIt?release-channel=default
