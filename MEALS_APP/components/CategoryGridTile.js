import { Pressable, View, Text } from "react-native";

function CategorieGridTile({ title, color }) {
  return (
    <View>
      {/* We want to redirect to the differen screen onPress of this component so added this Pressable Component */}
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategorieGridTile;
