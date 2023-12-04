import React from "react";
import { ScrollView, Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

const ProContrato = () => {

    const navigation = useNavigation(); 
    return(
        <View style={styles.container}>

            <TouchableOpacity style={styles.container__new__button} onPress={() => navigation.navigate('NuevoContrato')}>
                <Text style={styles.linkText}>CREAR NUEVO CONTRATO</Text>
            </TouchableOpacity>

            <Text style={styles.container__h1}>
                Contratos existentes
            </Text>
            <ScrollView style={styles.container__contratos}>
                
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

    container__new__button:{
        textAlign: "center",
        alignItems: "center",
        marginTop: 10,
        backgroundColor: '#66e325',
        padding: 20,
        borderRadius: 10,
    },

    container__h1:{
        fontSize: 20,
        marginTop: 115,
        marginLeft: 60,
        backgroundColor: "#f3f3f3",
        zIndex: 1,
        position: "absolute",
    },

    container__contratos:{
        marginTop: 40,
        borderStyle: "solid",
        borderColor: 'gray',
        borderRadius: 30,
        borderWidth: 2,
        height: '100%'
    }
})

export default ProContrato