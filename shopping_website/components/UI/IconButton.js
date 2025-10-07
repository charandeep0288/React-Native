import { Pressable, View,  StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon, size, color, onPressProp, onstyleAdd}) {
  return (
    <Pressable
      onPress={onPressProp}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={onstyleAdd ? [onstyleAdd,styles.iconContainer] : styles.iconContainer}>
        <Ionicons name={icon} size={size ? size : 24} color={color} />
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
