import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

// View -> UIView 
export default function App() {
  let x = 1;

  console.log("App executed");

  const handlePress = () => console.log("Text Clicked!");
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}> app Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusamus consequuntur velit quibusdam beatae</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// App URL
// exp://exp.host/@charandeep2000/DoneWithIt?release-channel=default