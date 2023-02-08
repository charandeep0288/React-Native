import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Button, Alert } from "react-native";

// View -> UIView
export default function App() {
  let x = 1;

  // console.log("App executed");
  // console.log(require("./assets/icon.png")); // returns a number that is refernce to ower <Image>
  const handlePress = () => console.log("Text Clicked!");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Button
        color="orange"
        title="Click ME"
        // onPress={() => Alert.alert("My title", "My message", [
        //   {text: "Yes", onPress: () => console.log("Yes")},
        //   {text: "No",  onPress: () => console.log("No")},
        // ])}

        onPress={
          () =>
            Alert.prompt("My title", "My message", (text) => console.log(text)) // 3rd parameter is callback fn, Only works on iOS for now
        }
      ></Button>
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
