import React, { useEffect, useState } from "react";
import UserInvitado from "./UserInvitado";
import UserRegistrado from "../screens/UserRegistrado";
import Loading from "../components/Loading";
import * as firebase from "firebase";
export default function User() {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login === null) return <Loading esVisible={true} texto={"Cargando..."} />;

  return login ? <UserRegistrado /> : <UserInvitado />;
}
