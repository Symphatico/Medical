import React from "react";
import { View, Image } from "react-native";
import LoginForm from "../components/LoginForm";

export default function User() {
  return (
    <View style={estilo.container}>
      <Image
        source={require("../../img/doctor.png")}
        style={{ width: 200, height: 200 }}
      />
      <LoginForm />
    </View>
  );
}

const estilo = {
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: "rgba(238, 238, 238,224)",
  },
};
