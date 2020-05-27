import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={estilos.contenedor}>
      <Text>Pantalla de descripcion</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#9a1f40",
  },
});
