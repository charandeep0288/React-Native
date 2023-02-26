import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../store/auth-context";

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState("");

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    // we have added restriction/Rules on the firebase Realtime database saying that we can't fetch data if that user is not authenticated, so we need to confirm that user is authenticated by sending the token in the url using query prameters(?auth=token)(this is how it is done in firebase), then firebase can confirm that token in the firebase and confirm that it is an authenticated user.
    axios
      .get(
        "https://react-native-course-3e68a-default-rtdb.firebaseio.com/message.json?auth=" +
          token // we are sending along the token that proofs that user is authenticated, that request is coming form an authenticated user, REST API's don't store this information of token.
      )
      .then((response) => {
        // console.log(response.data);
        setFetchedMessage(response.data);
      });
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
