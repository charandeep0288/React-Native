import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import AllProducts from "./screens/AllProducts";
import Sort from "./screens/Sort";
import Filter from "./screens/Filter";

import SearchBar from "./components/UI/SearchBar";
import IconButton from "./components/UI/IconButton";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function test() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Sort" component={Sort}></BottomTabs.Screen>
      <BottomTabs.Screen name="Filter" component={Filter}></BottomTabs.Screen>
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerLeft: () => <IconButton icon="arrow-back-outline" />,
          headerTitle: () => <SearchBar />,
          headerTitleAlign: "center",
          headerRight: () => <IconButton icon="cart-outline" size={32} />,
        }}
      >
        <Stack.Screen name="All Promotions" component={AllProducts} />
        <Stack.Screen name="Sort" component={Sort} />
        <Stack.Screen name="Filter" component={Filter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
