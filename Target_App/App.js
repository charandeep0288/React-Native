import { StyleSheet, View } from 'react-native';

import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    // By default -> <View> take as much space as they need to fit their content inside themself's.
    <View style={styles.rootScreen}> 
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1, // by adding flex: 1 here, this container would take as much space as available
    backgroundColor: "#ddb52f", // next we would move to gradiant, then picture + gradiant
  },
});
