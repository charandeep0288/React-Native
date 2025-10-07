import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./screens/Home";
import Departments from "./screens/Departments";
import GlobalStyles from "./constants/style";
import ProductContextProvider from "./store/products-context";
import CartIcon from "./components/UI/CartIcon";

const BottomTabs = createBottomTabNavigator();

function Routes() {
  return (
    <ProductContextProvider>
      <NavigationContainer>
        <BottomTabs.Navigator
          screenOptions={{
            tabBarStyle: { height: 70 },
          }}
        >
          <BottomTabs.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: "",
              headerRight: () => <CartIcon />,

              tabBarIcon: ({ size, focused }) => {
                return (
                  <View style={styles.bottomTabContainer}>
                    <Ionicons
                      style={focused && styles.icon}
                      name="home-outline"
                      size={size}
                      color={focused && GlobalStyles.colors.pink10}
                    />
                    <Text
                      style={focused ? styles.homeLabel : styles.deselectedTab}
                    >
                      Home
                    </Text>
                  </View>
                );
              },
            }}
          ></BottomTabs.Screen>
          <BottomTabs.Screen
            name="Departments"
            component={Departments}
            options={{
              title: "All Departments",
              tabBarLabel: "",
              tabBarIcon: ({ size, focused }) => {
                return (
                  <View style={styles.bottomTabContainer}>
                    <View>
                      <Ionicons
                        style={focused && styles.icon}
                        name="apps-outline"
                        size={size}
                        color={focused && GlobalStyles.colors.pink10}
                      />
                    </View>

                    <Text
                      style={
                        focused ? styles.departmentsLabel : styles.deselectedTab
                      }
                    >
                      Department
                    </Text>
                  </View>
                );
              },
            }}
          ></BottomTabs.Screen>
        </BottomTabs.Navigator>
      </NavigationContainer>
    </ProductContextProvider>
  );
}

export default Routes;

const styles = StyleSheet.create({
  bottomTabContainer: {
    marginTop: 21,
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    backgroundColor: GlobalStyles.colors.pink20,
    paddingVertical: 8,
    paddingLeft: 30,
    paddingRight: 30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },

  homeLabel: {
    backgroundColor: GlobalStyles.colors.pink20,
    paddingLeft: 26,
    paddingRight: 26,
    color: "black",
    fontSize: 12,
    color: GlobalStyles.colors.grey,
  },

  deselectedTab: {
    fontSize: 12,
    color: GlobalStyles.colors.grey,
  },

  departmentsLabel: {
    backgroundColor: GlobalStyles.colors.pink20,
    paddingLeft: 11,
    paddingRight: 11,
    color: "black",
    fontSize: 12,
    color: GlobalStyles.colors.grey,
  },

  cart: {
    right: 10,
  },
});
