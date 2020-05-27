import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Bienvenida from "../app/screens/Bienvenida";
const Stack = createStackNavigator();
export default function BienvenidaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bienvenida"
        component={Bienvenida}
        options={{ title: "Mis mascotas" }}
      />
    </Stack.Navigator>
  );
}
