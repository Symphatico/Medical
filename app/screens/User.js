import React from "react";
import { View, ImageBackground } from "react-native";
import { Button, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function User() {
  const navegar = useNavigation();
  return (
    <View style={estilo.container}>
      <View style={estilo.btnContainer}>
        <Button
          onPress={() => navegar.navigate("Login")}
          buttonStyle={estilo.btn}
          title="Registrarse"
        />
      </View>
    </View>
  );
}

const estilo = {
  btnContainer: {
    width: "80%",
    justifyContent: "flex-end",
    marginBottom: 100,
  },
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  btn: {
    backgroundColor: "#a01935",
  },
};
