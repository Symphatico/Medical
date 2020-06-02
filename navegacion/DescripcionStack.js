import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Descripcion from "../app/screens/Descripcion";
const Stack = createStackNavigator();
export default function DescripcionStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bienvenida"
        component={Descripcion}
        options={{
          title: "Descripcion",
          headerStyle: {
            backgroundColor: "teal",
          },
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
}
