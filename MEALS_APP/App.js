import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; // wrap the app with this "NavigationContainer" container to make whole app use Navigation to switch btw different screens
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";

const Stack = createNativeStackNavigator(); // "Stack" is with 2 properties(Navigator, Screen) where every property act as a component.

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          {/* Screen is a screen that is managed by this <Stack.Navigator> */}
          <Stack.Screen name="MealsCategories" component={CategoriesScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
