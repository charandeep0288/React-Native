import {
  StyleSheet,
  View,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import Colors from "../../constants/colors";

function Card({ children, isGameScreen }) {
  const { width, height } = useWindowDimensions();

  const marginDistance = height < 365 ? 10 : isGameScreen ? 3 : 36;
  const marginDistance0 = width < 380 ? 10 : 36;
  // console.log(width + " " + height);

  return (
    <View style={[styles.card, { marginTop: marginDistance }]}>{children}</View>
  );
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
