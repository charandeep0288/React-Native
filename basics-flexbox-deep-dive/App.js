import React from "react";
import { Text, View } from "react-native";

export default function App() {
  return (
    // By defalut: Every View in the React Native uses Flex Box, but in web it is not like that
    // By defalut: Every View in the React Native uses Flex Direction of column
    // {/* flexDirection: row-reverse */}
    // For flexDirection: 'row', "justifyContent" is used to align items on the "Main axis" & "alignItems" is used to align items on the "Cross axis"
    <View
      style={{
        padding: 50,
        flexDirection: "row",
        width: "80%",
        height: 300,
        justifyContent: "space-around",
        alignItems: "stretch",
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          // width: 100, 
          // height: 100,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          // width: 100,
          // height: 100,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          // width: 100,
          // height: 100,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}
