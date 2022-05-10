import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AuthContext, useAuth } from "../contexts/auth";

const Pedidos = () => {
  const { nome, user } = useAuth()

  return (
    <View style={style.container}>
      <Text>TELA ATUAL: PEDIDOS</Text>
      <Text>NOME: {nome}</Text>
      <Text>E-MAIL LOGADO: {user.email}</Text>
      <Text>STATUS: {user.status}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Pedidos;
