import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ListItem } from "react-native-elements";
export default function App() {
  const list = [
    {
      title: "Pais",
      icon: "office-building",
    },
    {
      title: "Procedimiento",
      icon: "hospital",
    },
  ];

  return (
    <View style={estilos.contenedor}>
      <View style={estilos.contenedor_titulo}>
        <Text style={estilos.titulo}>MEDICAL</Text>
        <Image
          source={require("../../img/cruzverde.jpg")}
          style={{ width: 200, height: 200 }}
        />
        <Text style={estilos.titulo}>Agenda una cita con nosotros!</Text>
      </View>
      <View style={estilos.lista}>
        {list.map((item, i) => (
          <ListItem key={i} title={item.title} bottomDivider chevron />
        ))}
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
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 1,
  },
  titulo: {
    fontSize: 20,
    color: "teal",
  },
  lista: {
    paddingTop: 10,
  },
});
