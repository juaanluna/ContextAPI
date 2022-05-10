import React from "react";
import { TextInput, TextInputProps, StyleSheet } from "react-native";
import { theme } from "../global/theme";

type Props = TextInputProps & {
  onChange: any;
  placeholder: string;
};

const Input = ({ onChange, ...rest }: Props) => {
  return (
    <TextInput
      style={style.input}
      onChangeText={(e) => onChange(e)}
      {...rest}
    />
  );
};

const style = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.heading,
    width: 350,
    height: 55,
    borderRadius: 10,
    marginTop: 10,
    textAlign: "center",
  },
});

export default Input;
