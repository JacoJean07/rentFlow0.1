import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ContratoStack from "../stacks/ContratoStack";
import ProHistorialPagos from "../screens/screensPropietario/ProHistorialPagos";
import ProInicio from "../screens/screensPropietario/ProInicio";
import ProValidarPagos from "../screens/screensPropietario/ProValidarPagos";
import SettingsStack from "../stacks/SettingStack";



const ProTab = () => {
    const Tab = createBottomTabNavigator();
    return(
            <Tab.Navigator>
                <Tab.Screen name="Inicio" component={ProInicio}/>
                <Tab.Screen name="Contratos" component={ContratoStack}/>
                <Tab.Screen name="Historial de Pagos" component={ProHistorialPagos}/>
                <Tab.Screen name="Validar Pagos" component={ProValidarPagos}/>
                <Tab.Screen name="Settings" component={SettingsStack}/>
            </Tab.Navigator>
    );
};

export default ProTab;