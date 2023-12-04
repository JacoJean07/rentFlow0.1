import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Contratos from '../screens/screensPropietario/ProContratos';
import NuevoContrato from '../screens/screensPropietario/NuevoContrato';



function ContratoStack() {

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contratos" component={Contratos} options={{ headerShown: false }} />
      <Stack.Screen name="NuevoContrato" component={NuevoContrato} />
    </Stack.Navigator>
  );
}   

export default ContratoStack