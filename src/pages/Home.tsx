import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import { useAuth } from "../contexts/auth";

const Home = () => {
  const { navigate } = useNavigation();
  const { user } = useAuth();

  const onSubmit = useCallback(() => {
    return navigate("Pedidos");
  }, []);

  return (
    <View style={style.container}>
      <Text>TELA ATUAL: HOME</Text>
      <Text>E-MAIL LOGADO: {user.email}</Text>
      <Button title="ACESSAR PEDIDOS" onPress={() => onSubmit()} />
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

export default Home;
