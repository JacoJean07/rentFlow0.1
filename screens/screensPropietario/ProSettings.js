import React from "react";
import { ScrollView, Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

const ProContrato = () => {

    const navigation = useNavigation(); 
    return(
        <View style={styles.container}>

            <TouchableOpacity style={styles.container__new__button} >
                <Text style={styles.linkText}>DATOS PERSONALES</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.container__new__button} >
                <Text style={styles.linkText}>SOBRE NOSOTROS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.container__new__button} >
                <Text style={styles.linkText}>CONTACTO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.container__new__button} onPress={() => navigation.navigate('RentFlow')}>
                <Text style={styles.linkText}>CERRAR SESIÓN</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        flex:1,
        backgroundColor: "#f3f3f3",
    },

    container__new__button:{
        textAlign: "center",
        alignItems: "center",
        marginTop: 10,
        backgroundColor: '#e1e1e1',
        padding: 20,
        borderRadius: 10,
    },


})

export default ProContrato