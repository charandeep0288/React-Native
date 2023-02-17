import { StyleSheet, View, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {  
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    // justifyContent: "center",
    alignItems: "center",
    elevation: 4, // to add box shadow in android only

    // to add box shadow in iOS, we have to do these things
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
