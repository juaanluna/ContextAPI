import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { theme } from "../global/theme";

type Props = TouchableOpacityProps & {
  title: string;
};

const Button = ({ title, ...rest }: Props) => {
  return (
    <TouchableOpacity style={style.container} {...rest}>
      <Text style={style.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    width: 350,
    height: 55,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: "center",
  },
  text: {
    color: theme.colors.heading,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Button;
