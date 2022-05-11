import { useNavigation } from "@react-navigation/native";
import React, { createContext, useContext, useState } from "react";
import { Alert } from "react-native";

type SignInProps = {
  email: string;
  password: string;
};

type UserProps = {
  email?: string;
  status: "ATIVO" | "INATIVO";
};

type AuthProps = {
  nome: string;
  user?: UserProps;
  signIn: (props: SignInProps) => void;
};
export const AuthContext = createContext<AuthProps | null>(null);

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<UserProps>({
    email: "",
    status: "INATIVO",
  });

  const { navigate } = useNavigation();

  const signIn = ({ email, password }: SignInProps) => {
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

export const useAuth = (): AuthProps => useContext(AuthContext) as AuthProps;

export default AuthProvider;
