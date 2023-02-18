import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; // wrap the app with this "NavigationContainer" container to make whole app use Navigation to switch btw different screens
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator(); // "Stack" is with 2 properties(Navigator, Screen) where every property act as a component.

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          // if we want these properties or styles applied to all screen in this naivagation, then we can define styles using "screenOptions" prop on Navigator Component.
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          {/* Stack.Screen is a screen that is managed by this <Stack.Navigator> */}
          {/* component is the component we want to render, in this case <CategoriesScreen> component*/}
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories", // this title would be visible at the top of the screen
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // this is a 1 way -> to set title as category name on MealsOverviewScreen
            // we get these properties {route, navigation} passed by React Navigation to this options prop and using destructuring to extract those values in the fn we have in options prop
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId, // we can CATEGORIES from dummy-data to get title of the category
            //   };
            // }}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            // this is a 1 way of adding a component or btn to do, if we don't want to direct interact with the component that is responsible for rendering the screen content(MealDetailScreen). 
            // if want to have direct communication with component that is responsible for rendering the screen content(MealDetailScreen) then we can go to this component(MealDetailScreen) and do things using "useLayoutEffect" hook
            // options={{
            //   headerRight: () => {
            //     return <Button title="Tap me!">In the header</Button>;
            //   },
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
