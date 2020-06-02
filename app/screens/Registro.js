import React, { useState } from "react";
import { View, Image, Button } from "react-native";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
// import * as firebase from "firebase";
import Loading from "../components/Loading";
export default function Registro() {
  const [estado, setEstado] = useState(false);
  const [datosFormulario, setDatosFormularios] = useState(valoresPorDefecto);
  const cambiarVentana = useNavigation();

  function valoresPorDefecto() {
    return {
      email: "",
      password: "",
      password2: "",
    };
  }

  const cambioTexto = (evento, tipoDato) => {
    setDatosFormularios({
      ...datosFormulario,
      [tipoDato]: evento.nativeEvent.text,
    });
  };

  const onSumbit = () => {
    if (
      isEmpty(datosFormulario.email) ||
      isEmpty(datosFormulario.password || isEmpty(datosFormulario.password2))
    )
      alert("Completa las casillas");
    else {
      if (datosFormulario.password2 == datosFormulario.password) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(
            datosFormulario.email,
            datosFormulario.password
          )
          .then(() => {
            setEstado(true);
            cambiarVentana.navigate("cuenta");
          })
          .catch((error) => {
            setEstado(false);
            console.log(error);
          });
      } else {
        alert("Las contraseñas no coinciden");
        console.log("contraseña 1 " + datosFormulario.password);
        console.log(" constraseña 2 " + datosFormulario.password2);
      }
    }
  };
  return (
    <View style={estilo.container}>
      <Image
        source={require("../../img/nice.png")}
        style={{ width: 300, height: 200 }}
      />
      <Input
        placeholder="Nombre de usuario"
        onChange={(evento) => cambioTexto(evento, "email")}
      />
      <Input
        placeholder="Nueva contraseña"
        secureTextEntry={true}
        onChange={(evento) => cambioTexto(evento, "password")}
      />
      <Input
        placeholder="Repite contraseña"
        secureTextEntry={true}
        onChange={(evento) => cambioTexto(evento, "password2")}
      />

      <Button title="Registrate" onPress={onSumbit} />
      <Loading esVisible={estado} texto="Creando cuenta" />
    </View>
  );
}

const estilo = {
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    padding: 10,
    backgroundColor: "rgba(238, 238, 238,224)",
  },
};
