import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
 
const Drawer = createDrawerNavigator(); // have 2 properties(Navigator, Screen)

export default function App() {
  // STEP 1: always to add this <NavigationContainer> if we want to use these navigators.
  return <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Welcome" component={WelcomeScreen}></Drawer.Screen>
      <Drawer.Screen name="User" component={UserScreen}></Drawer.Screen>
    </Drawer.Navigator>
  </NavigationContainer>
}

// npm install @react-navigation/drawer
// expo install react-native-gesture-handler react-native-reanimated
// npm install react-native-reanimated@1 --save --save-exact