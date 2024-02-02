import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen.js';
import HomePage from './screens/HomePage.js';
import Login from './screens/Login.js';
import Register from './screens/Register.js';
import ProTab from './tabs/ProTabs.js'
import NuevoContrato from './screens/screensPropietario/NuevoContrato.js'
import SobreNosotros from './screens/screensPropietario/SobreNosotros.js'
import Contacto from './screens/screensPropietario/Contacto.js'
import DatosPersonales from './screens/screensPropietario/DatosPersonales.js'
import Settings from './screens/screensPropietario/Settings.js';
import EditProfile from './screens/screensPropietario/EditProfile.js';
import { useFonts } from 'expo-font';


const Stack = createStackNavigator();

const App = () => {

  const [fontsLoaded] = useFonts({
    black: require('./assets/fonts/Inter-Black.ttf'),
    bold: require('./assets/fonts/Inter-Bold.ttf'),
    medium: require('./assets/fonts/Inter-Medium.ttf'),
    regular: require('./assets/fonts/Inter-Regular.ttf'),
    semiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="RentFlow" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="HomePage" component={HomePage}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
        <Stack.Screen name="Propietario" component={ProTab} options={{ headerShown: false }}/>
        <Stack.Screen name="NuevoContrato" component={NuevoContrato} options={{ headerShown: false }}/>
        <Stack.Screen name="DatosPersonales" component={DatosPersonales} options={{ headerShown: false }}/>
        <Stack.Screen name="SobreNosotros" component={SobreNosotros} options={{ headerShown: false }}/>
        <Stack.Screen name="Contacto" component={Contacto} options={{ headerShown: false }}/>
        <Stack.Screen name="CerrarSecion" component={HomeScreen} options={{ headerShown: false }}/>
        
         <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
