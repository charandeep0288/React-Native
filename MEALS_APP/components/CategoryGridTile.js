import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
// import { useNavigation } from "@react-navigation/native";

function CategorieGridTile({ title, color, onPressProp }) {
//   const navigation = useNavigation(); // we can use this hook in any component no matter if that Screen/component is registered as Screen or not, returns navigation

  return (
    <View style={styles.gridItem}>
      {/* We want to redirect to the differen screen onPress of this component so added this Pressable Component */}
      {/* "android_ripple" gives ripple effect on android only not on iOS */}
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPressProp}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategorieGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4, // for shadow on Android

    // for shadow on iOS
    backgroundColor: "white", // for shadow to be visible we need to add "backgroundColor" for iOS
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  buttonPressed: {
    opacity: 0.5,
  },

  button: {
    flex: 1,
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
