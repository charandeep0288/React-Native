import { StyleSheet, StatusBar, View } from "react-native";

export default function App() {
  return (
    <View style={[{ backgroundColor: "green", flexDirection: 'row' }, styles.container]}>
      {/* by default items are layed out in a column flexDirection */}
      <View style={{ backgroundColor: "dodgerblue", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "gold", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },

});
// App URL
// exp://exp.host/@charandeep2000/DoneWithIt?release-channel=default
