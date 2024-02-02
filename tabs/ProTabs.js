import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ContratoStack from "../stacks/ContratoStack";
import ProInicio from "../screens/screensPropietario/ProInicio";
import ProValidarPagos from "../screens/screensPropietario/ProValidarPagos";
//import Profile from "../screens/screensPropietario/Profile";
//import UserInfo from "../components/AccountComponents/MyAccountUser";
import { Profile, Settings } from "../screens/screensPropietario";
import { COLORS } from "../constants";
import {
  SimpleLineIcons,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import UserInfo from "../components/AccountComponents/MyAccountUser";



const ProTab = () => {
    const Tab = createBottomTabNavigator();
    return(
            <Tab.Navigator>
                <Tab.Screen name="Inicio"
                   component={ProInicio}
                  options={{
          tabBarIcon: ({ focused }) => {
            return (
              <SimpleLineIcons
                name="home"
                size={24}
                color={focused ? COLORS.primary : COLORS.black}
              />
            );
          },
        }}

                   />

                <Tab.Screen
        name="Contratos"
        component={ContratoStack}
         options={{
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome5
                name="file-contract"
                size={24}
                color={focused ? COLORS.primary : COLORS.black}
              />
            );
          },
        }}

      />

                <Tab.Screen
        name="Validar Pagos"
        component={ProValidarPagos}
   options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="cash-check"
                size={24}
                color={focused ? COLORS.primary : COLORS.black}
              />
            );
          },
        }}

      />


        <Tab.Screen
        name="Configuraciones"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name="settings"
                size={24}
                color={focused ? COLORS.primary : COLORS.black}
              />
            );
          },
        }}
      />

                <Tab.Screen
        name="Perfil" 
        component={Profile}
       options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name="person-outline"
                size={24}
                color={focused ? COLORS.primary : COLORS.black}
              />
            );
          },
        }}
      />
            </Tab.Navigator>
    );
};

export default ProTab;
