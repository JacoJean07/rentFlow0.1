import React from "react";
import { ScrollView, Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

const ProValidarPagos = () => {

    const navigation = useNavigation(); 
    return(
        <View style={styles.container}>

            <Text style={styles.container__h1}>
                Lista de Pagos por Validar
            </Text>
            <ScrollView style={styles.container__HistorialPagos}>
                
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        flex:1,
        backgroundColor: "#f3f3f3",
    },

    container__h1:{
        fontSize: 20,
        marginTop: 36,
        marginLeft: 60,
        backgroundColor: "#f3f3f3",
        zIndex: 1,
        position: "absolute",
    },

    container__HistorialPagos:{
        marginTop: 30,
        borderStyle: "solid",
        borderColor: 'gray',
        borderRadius: 30,
        borderWidth: 2,
        height: '100%'
    }
})

export default ProValidarPagos