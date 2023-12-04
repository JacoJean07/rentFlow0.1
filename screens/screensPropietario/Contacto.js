import React from "react";
import { ScrollView, Text, StyleSheet, Image } from "react-native";

const ProInicio = () => {
    return(
        <ScrollView style={styles.container}>

            <Text style={styles.container__h1}>
                Bienvenido a RENTFLOW tu gestor de movimientos inmobiliarios de confianza
            </Text>
            
            <Image source={require('../../assets/img/logo.png')} style={styles.logo} />

        </ScrollView>
    )
}


const styles = StyleSheet.create({

    container:{
        padding: 20,
    },

    container__h1:{
        fontSize: 40,
        justifyContent: "center",
        textAlign: "center",
    },

    logo: {
        width: 250,
        height: 250,
        alignSelf: 'center', 
        marginTop: 20,
    },

})

export default ProInicio