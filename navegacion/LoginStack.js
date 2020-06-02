import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserInvitado from "../app/screens/UserInvitado";
import User from "../app/screens/User";
import Login from "../app/screens/Login";
import Registro from "../app/screens/Registro";
const Stack = createStackNavigator();
export default function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="User"
        component={User}
        options={{
          title: "Usuario",
          headerStyle: {
            backgroundColor: "teal",
          },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "Iniciar sesion",
          headerStyle: {
            backgroundColor: "teal",
          },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="registro"
        component={Registro}
        options={{
          title: "Registro",
          headerStyle: {
            backgroundColor: "teal",
          },
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
}
