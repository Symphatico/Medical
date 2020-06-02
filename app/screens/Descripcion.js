import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function App() {
  return (
    <View style={estilos.contenedor}>
      <View style={estilos.contenedor_titulo}>
        <Text style={estilos.titulo}>SOBRE ESTA APLICACION</Text>
        <Image
          source={require("../../img/cruzverde.jpg")}
          style={{ width: 200, height: 200 }}
        />
        <Text style={estilos.cuerpo}>
          Nosotros somos una empresa que quiere traerte la facilidad de agendar
          una cita a tu clinica mas cercana y poner a tu disposicion los
          procedimientos que ofrece las clinicas.
        </Text>
      </View>
      <View style={estilos.contenedor}>
        <Text style={estilos.cuerpo}>
          Desarrollado por: Dante Gonzalez Estrada
        </Text>
        <Text style={estilos.cuerpo}>Numero de control: 18760609</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "rgba(238, 238, 238,224)",
  },
  contenedor_titulo: {
    justifyContent: "center",
    paddingTop: 15,
    alignItems: "center",
  },
  titulo: {
    fontSize: 20,
    color: "teal",
    textAlign: "center",
  },
  cuerpo: {
    justifyContent: "flex-start",
    paddingTop: 1,
    alignItems: "center",
    textAlign: "center",
  },
});
