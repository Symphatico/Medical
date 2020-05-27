import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BienvenidaStack from "./BienvenidaStack";
import { Icon } from "react-native-elements";
import DescripcionStack from "./DescripcionStack";

import LoginStack from "./LoginStack";
const Tab = createBottomTabNavigator();

export default function Navegacion() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="bienvenida"
        tabBarOptions={{
          activeTintColor: "teal",
          inactiveTintColor: "black",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen
          name="bienvenida"
          component={BienvenidaStack}
          options={{ title: "inicio" }}
        />
        <Tab.Screen
          name="Descripcion"
          component={DescripcionStack}
          options={{ title: "Descripcion" }}
        />
        <Tab.Screen
          name="login"
          component={LoginStack}
          options={{ title: "Log in" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(route, color) {
  let iconName;
  switch (route.name) {
    case "bienvenida":
      iconName = "cat";
      break;
    case "Descripcion":
      iconName = "note-outline";
      break;
    default:
      break;
  }
  return <Icon type="material-community" name={iconName} size={22} />;
}
