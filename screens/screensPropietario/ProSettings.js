import React from "react";
import { ScrollView, Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import UserProfileSection from "../../components/UserProfileSection";

const ProSetting = () => {

    const navigation = useNavigation(); 

    const currentUser = {
    name: 'John Doe',
    email: 'john@example.com',
    phoneNumber: '+1234567890',
    photoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2Ftouhou%2Fcomments%2Fqarq5w%2Fmarisa_kirisame%2F&psig=AOvVaw13emyR4Z9H7-FLbawjdHG9&ust=1706804853033000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJDan9yFiIQDFQAAAAAdAAAAABAE', // URL de la foto del usuario
  };

    return(
  
   <View style={styles.container}>
            <UserProfileSection user={currentUser} />
            <Text style={styles.container__new__button}>Tu contenido aquí...</Text>
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

export default ProSetting;
