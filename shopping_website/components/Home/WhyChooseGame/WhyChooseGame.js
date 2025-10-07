import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  FlatList,
} from "react-native";

import GlobalStyles from "../../../constants/style";
import WhyChooseGameItem from "./WhyChooseGameItem";

function WhyChooseGame({ whyChooseGamedata }) {
  let index0 = 0;
  function renderWhyChooseGameHandler(itemData) {
    const item = itemData.item;
    const length = whyChooseGamedata.length;
    index0++;

    const whyChooseGameItemProps = {
      index: index0,
      title: item.title,
      description: item.description,
      url: item.url,
      length: length
    };
 
    return <WhyChooseGameItem {...whyChooseGameItemProps}/>
  }

  return (
    <View style={styles.whyChooseGameContainer}>
      <View style={styles.whyChooseGameTitle}>
        <Text style={styles.whyChooseGameTitleText1}>Why Choose </Text>
        <Text style={styles.whyChooseGameTitleText2}>Game?</Text>
      </View>

      <FlatList
        data={whyChooseGamedata}
        keyExtractor={(item) => item.title}
        renderItem={renderWhyChooseGameHandler}
      />
    </View>
  );
}

export default WhyChooseGame;

const WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  whyChooseGameContainer: {
    width: WIDTH,
    height: 250,
    backgroundColor: GlobalStyles.colors.lightBlue10,
    padding: 15,
  },

  whyChooseGameTitle: {
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },

  whyChooseGameTitleText1: {
    fontSize: 15,
    fontWeight: "bold",
  },

  whyChooseGameTitleText2: {
    fontSize: 15,
    fontWeight: "bold",
    color: GlobalStyles.colors.pink10,
  },
});
