import React, { useState } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { isEmpty } from "lodash";
// import * as firebase from "firebase";
export default function LoginForm() {
  const navegar = useNavigation();
  function valoresPorDefecto() {
    return {
      email: "",
      password: "",
    };
  }
  const cambioTexto = (evento, tipoDato) => {
    setDatosFormularios({
      ...datosFormulario,
      [tipoDato]: evento.nativeEvent.text,
    });
  };
  const onSubmit = () => {
    if (isEmpty(datosFormulario.email) || isEmpty(datosFormulario.password))
      alert("Completa tus datos");
    else {
      firebase
        .auth()
        .signInWithEmailAndPassword(
          datosFormulario.email,
          datosFormulario.password
        )
        .then(() => {
          navega.navigate("cuenta");
        })
        .catch(() => {
          alert("Los datos son incorrectos");
        });
    }
  };

  return (
    <View>
      <Input
        placeholder="Nombre de usuario"
        onChange={(evento) => cambioTexto(evento, "email")}
      />
      <Input
        placeholder="Contraseña"
        secureTextEntry={true}
        onChange={(evento) => cambioTexto(evento, "password")}
      />

      <Button title="Iniciar sesion" onPress={onSubmit} />
      <Text style={estilo.texto}>¿No tienes cuenta?</Text>
      <Text
        onPress={() => navegar.navigate("registro")}
        style={estilo.texto_registro}
      >
        Registrate
      </Text>
    </View>
  );
}
const estilo = StyleSheet.create({
  registro: {
    fontWeight: "bold",
    color: "#FF0000",
  },
  texto: {
    textAlign: "center",
  },
  texto_registro: {
    color: "blue",
    textAlign: "center",
  },
});
