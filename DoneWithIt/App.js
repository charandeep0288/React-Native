import { StyleSheet, StatusBar, View } from "react-native";

export default function App() {
  return (
    <View
      style={[
        {
          backgroundColor: "green",
          flexDirection: "row", // horizontal - main axis
          justifyContent: "center", // main (flex-start(default), flex-end, center), space-around, space-evenly, space-between
          alignItems: "center", // alignItems align items in each row(line) when we have flexWrap: "wrap" on cross axis
          // cross axis (center, baseline, flex-end, flex-start, stretch(default))
          // alignContent: "center", // using this with flexWrap: "wrap", Items would be aligned in the center of the screen. "alignContent" only works with "flexWrap".
          // flexWrap: "wrap", // (no-wrap(default), )
        },
        styles.container,
      ]}
    >
      {/* by default items are layed out in a column flexDirection */}
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          // flexBasis: 100, // Can be mapped to "width" OR "height", for this case -> It is same as width: 100
          // flexGrow: 1, // same as flex: 1
          // flex: -1, // flex is a shot hand of flexGlow & flexShrink
          // flexShrink: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",

          width: 100,
          height: 100,
          // position: "relative", // (this happens because BY DEFAULT all elements in React Native have set their position set to relative)
          top: 40, // we can use(top, left, right, bottom) properties to position element relative to its current position without effection layout around it.(this happens because BY DEFAULT all elements in React Native have set their position set to relative)
          left: 40,
          // position: "absolute", // By using, position: "absolute" layout around this element will also get effected.
          // zIndex: 1
        }}
      />
      <View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
      {/* <View style={{ backgroundColor: "grey", width: 100, height: 100 }} /> */}
      {/* <View style={{ backgroundColor: "greenyellow", width: 100, height: 100 }} /> */}
      {/* by default: If ower Items overflow accross the main axis, then one or more items get shurk so that other Items can fit on the screen, can change this by enabling Wraping */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

// App URL
// exp://exp.host/@charandeep2000/DoneWithIt?release-channel=default
