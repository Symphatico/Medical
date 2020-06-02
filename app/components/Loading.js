import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Overlay } from "react-native-elements";

export default function Loading(props) {
  const { esVisible, texto } = props;

  return (
    <Overlay
      isVisible={esVisible}
      overlayStyle={estilos.overlay}
      overlayBackgroundColor="transparent"
    >
      <View style={estilos.view}>
        <ActivityIndicator size="large" color="#a01935" />
        {texto && <Text>{texto}</Text>}
      </View>
    </Overlay>
  );
}

const estilos = StyleSheet.create({
  overlay: {
    height: 100,
    width: 200,
    borderColor: "#fafafa",
    borderWidth: 2,
    borderRadius: 10,
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
