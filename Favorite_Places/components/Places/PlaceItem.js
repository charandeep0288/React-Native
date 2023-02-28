import { View, Image, Pressable, StyleSheet } from "react-native";

function PlaceItem({ place, onSelect }) {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ url: place.imageUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
}

export default PlaceItem;

const stlyes = StyleSheet.create({
    
});
