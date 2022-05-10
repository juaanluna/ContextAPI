import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Login, Pedidos } from "../pages";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Pedidos" component={Pedidos} />
    </Stack.Navigator>
  );
};

export default Routes;
