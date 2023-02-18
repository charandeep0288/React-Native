import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // to use icons

function IconButton({icon, color, onPressProp}) {
  return (
    <Pressable onPress={onPressProp} style={({pressed}) => pressed && styles.pressed}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

export default IconButton;


const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
    }
});