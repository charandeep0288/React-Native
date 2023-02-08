import {
  SafeAreaView,
  StyleSheet,
  Button,
  Alert,
  StatusBar,
  Platform,
  View,
  Dimensions
} from "react-native";

// View -> UIView
export default function App() {
  let x = 1;

  console.log(Dimensions.get("screen"));
  
  // console.log("App executed");
  // console.log(require("./assets/icon.png")); // returns a number that is refernce to ower <Image>
  const handlePress = () => console.log("Text Clicked!");

  return (
    // Styles coming from the left most(or last place) array element override the style which might came from the previous style components
    <SafeAreaView style={[styles.container, containerStyle]}>
      {/* SafeAreaView only works in iOS */}
      <View
        style={{ backgroundColor: "dodgerblue", width: "50%", height: 70 }}
      ></View>
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currnentHeight : 0,
  },

  textImage: {
    height: 300,
    width: 200,
  },
});

// App URL
// exp://exp.host/@charandeep2000/DoneWithIt?release-channel=default
