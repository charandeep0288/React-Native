import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

const Drawer = createDrawerNavigator(); // have 2 properties(Navigator, Screen)
const BottomTab = createBottomTabNavigator(); // have 2 properties(Navigator, Screen)

export default function App() {
  // STEP 1: always to add this <NavigationContainer> if we want to use these navigators.
  // return (
  //   <NavigationContainer>
  //     <BottomTab.Navigator
  //       screenOptions={{
  //         headerStyle: { backgroundColor: "#3c0a6b" },
  //         headerTintColor: "white",
  //         tabBarActiveTintColor: "#3c0a6b",
  //       }}
  //     >
  //       <BottomTab.Screen
  //         name="Welcome"
  //         component={WelcomeScreen}
  //         options={{
  //           tabBarIcon: ({ color, size }) => (
  //             <Ionicons name="home" color={color} size={size} />
  //           ),
  //         }}
  //       />
  //       <BottomTab.Screen name="User" component={UserScreen} options={{
  //         tabBarIcon: ({ color, size }) => (
  //           <Ionicons name="person" color={color} size={size} />
  //         ),
  //       }} />
  //     </BottomTab.Navigator>
  //   </NavigationContainer>
  // );

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#3c0a6b" },
          headerTintColor: "white",
          drawerActiveBackgroundColor: "#f0e1ff",
          drawerActiveTintColor: "#3c0a6b",
          // drawerStyle: "#ccc",
        }}
      >
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerLabel: "Welcome Screen",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// npm install @react-navigation/native
// npm install @react-navigation/drawer
// expo install react-native-gesture-handler react-native-reanimated
// npm install react-native-reanimated@1 --save --save-exact
