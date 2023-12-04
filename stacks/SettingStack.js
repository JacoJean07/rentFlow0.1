import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DatosPersonales from '../screens/screensPropietario/DatosPersonales';
import SobreNosotros from '../screens/screensPropietario/SobreNosotros';
import Contatoc from '../screens/screensPropietario/Contacto';
import Settings from '../screens/screensPropietario/ProSettings';

function SettingsStack() {

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
      <Stack.Screen name="Datos Personales" component={DatosPersonales} />
      <Stack.Screen name="Sobre Nosotros" component={SobreNosotros} />
      <Stack.Screen name="Contacto" component={Contatoc} />
    </Stack.Navigator>
  );
}   

export default SettingsStack