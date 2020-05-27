import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import User from "../app/screens/User";
import Login from "../app/screens/Login";
import Registro from "../app/screens/Registro";
const Stack = createStackNavigator();
export default function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="User" component={User} options={{ title: "USER" }} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Iniciar sesion" }}
      />
      <Stack.Screen
        name="registro"
        component={Registro}
        options={{ title: "Registro" }}
      />
    </Stack.Navigator>
  );
}
