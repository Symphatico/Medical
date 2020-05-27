import React from "react";
import { View, Button } from "react-native";
import { Input } from "react-native-elements";
//Import keyboardawarescrollview
export default function FormularioRegistro() {
  return (
    <View>
      <Input placeholder="Nombre de usuario" />
      <Input placeholder="Nueva contraseña" />
      <Input placeholder="Repite contraseña" />
      <Button title="Registrate" />
    </View>
  );
}
