import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon, size, color, onPressProp }) {
  return (
    <Pressable
      style={[styles.button, ({ pressed }) => pressed && styles.pressed]}
      onPress={onPressProp}
    >
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    justifyContent: "center",
    alignItem: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
