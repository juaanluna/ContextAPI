import { useNavigation } from "@react-navigation/native";
import React, { createContext, useContext, useState } from "react";
import { Alert } from "react-native";

export const AuthContext = createContext({});

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState({});
  const { navigate } = useNavigation();

  const signIn = (email: string, password: string) => {
    if (email !== "" && password !== "") {
      setUser({ email: email, status: "ATIVO" });
      navigate("Home");
    } else Alert.alert("Ops", "Não foi possivel logar");
  };

  return (
    <AuthContext.Provider value={{ nome: "JUAN LUNA", signIn, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
