import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen.js';
import HomePage from './screens/HomePage.js';
import Login from './screens/Login.js';
import Register from './screens/Register.js';
import ProTabs from './tabs/ProTabs.js'
import NuevoContrato from './screens/screensPropietario/NuevoContrato.js'
import SobreNosotros from './screens/screensPropietario/SobreNosotros.js'
import Contacto from './screens/screensPropietario/Contacto.js'
import DatosPersonales from './screens/screensPropietario/DatosPersonales.js'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="RentFlow" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="HomePage" component={HomePage}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
        <Stack.Screen name="Propietario" component={ProTabs} options={{ headerShown: false }}/>
        <Stack.Screen name="NuevoContrato" component={NuevoContrato} options={{ headerShown: false }}/>
        <Stack.Screen name="DatosPersonales" component={DatosPersonales} options={{ headerShown: false }}/>
        <Stack.Screen name="SobreNosotros" component={SobreNosotros} options={{ headerShown: false }}/>
        <Stack.Screen name="Contacto" component={Contacto} options={{ headerShown: false }}/>
        <Stack.Screen name="CerrarSecion" component={HomeScreen} options={{ headerShown: false }}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
