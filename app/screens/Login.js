import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  return (
    <View>
      <Text>NOMBRE DE USUARIO</Text>
      <Registrate />
    </View>
  );
}
function Registrate() {
  const navergar = useNavigation();
  return (
    <Text>
      ¿No tienes cuenta?
      <Text
        onPress={() => navergar.navigate("registro")}
        style={estilo.registro}
      >
        Registrate
      </Text>
    </Text>
  );
}

const estilo = StyleSheet.create({
  registro: {
    fontWeight: "bold",
    color: "#FF0000",
  },
});
