import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import InContrato from "../screens/screensInquilino/InContrato";
import inHistorialPagos from "../screens/screensInquilino/inHistorialPagos";
import InInicio from "../screens/screensInquilino/InInicio";
import InPagos from "../screens/screensInquilino/InPagos";
import InSettings from "../screens/screensInquilino/InSettings";


const InTab = () => {
    const Tab = createBottomTabNavigator();
    return(
            <Tab.Navigator>
                <Tab.Screen name="Contratos" component={InContrato}/>
                <Tab.Screen name="Historial de Pagos" component={inHistorialPagos}/>
                <Tab.Screen name="Inicio" component={InInicio}/>
                <Tab.Screen name="Pagar" component={InPagos}/>
                <Tab.Screen name="Settings" component={InSettings}/>
            </Tab.Navigator>
    );
};

export default InTab;