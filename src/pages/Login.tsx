import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { useAuth } from "../contexts/auth";
import { theme } from "../global/theme";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  const onSubmit = useCallback(() => {
    signIn({ email, password });
  }, [email, password]);

  return (
    <View style={style.container}>
      <Text style={style.text}>CONTEXT API</Text>
      <Input onChange={setEmail} placeholder="E-mail" />
      <Input onChange={setPassword} placeholder="Senha" secureTextEntry />
      <Button title="ENTRAR" activeOpacity={0.7} onPress={() => onSubmit()} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  text: {
    textAlign: "center",
    color: theme.colors.heading,
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 24,
  },
});

export default Login;
