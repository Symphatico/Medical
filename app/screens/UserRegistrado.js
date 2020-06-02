import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ListItem, Icon } from "react-native-elements";
export default function UserRegistrado() {
  const list = [
    {
      title: "Citas",
    },
    {
      title: "Doctores",
    },
  ];

  return (
    <View style={estilos.contenedor}>
      <View style={estilos.contenedor_titulo}>
        <Text style={estilos.titulo}>CUENTA</Text>
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
    justifyContent: "center",
  },
});
