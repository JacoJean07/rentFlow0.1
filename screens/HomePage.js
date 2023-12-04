import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

class HomePage extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>

        <View style={styles.bloque1} id="seccion1">
            <Text style={styles.heading}>¿Eres propietario?</Text>
            <Text>Con nuestros servicios podrás:</Text>
            <Text>- Gestionar fácilmente los detalles de las propiedades</Text>
            <Text>- Realizar un seguimiento de los pagos de los arrendatarios</Text>
            <Text>- Realizar alertas importantes sobre vencimientos y eventos críticos</Text>
            <Text>- Generar informes financieros para un análisis detallado</Text>
            <Text>
            Inicia sesión para acceder a estas funciones y simplificar la gestión de tus propiedades
            </Text>
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
            </TouchableOpacity>
        </View>
        <View> 
            <Text style={styles.heading}>¿Eres propietario?</Text>
            <Text>Lleva las cuentas de los pagos realizados y mantente al tanto del siguiente pago, inicia secion y con ayuda del propietario accede a una de sus propiedades</Text>
        </View>
        <View>
            <Text style={styles.heading}>Revolucionando la gestión inmobiliaria.</Text>
        </View>
        <View style={styles.ayuda}>
            <Text style={styles.heading}>¿Preguntas frecuentes?</Text>
            <Text style={styles.ayudaPregunta}>¿Cómo envío/recibo un pago?</Text>
            <Text>Ofrecemos esta herramienta de gestión como un servicio valioso; sin embargo, no proporcionamos métodos de pago directos. Para garantizar la transparencia y seguridad en cada transacción, recomendamos adjuntar evidencia, como una foto de la transacción o un recibo de pago, después de que tanto el emisor como el receptor hayan confirmado el pago.</Text>
            <Text style={styles.ayudaPregunta}>Olvidé mi contraseña, ¿qué hacer?</Text>
            <Text>¡Pan comido! Simplemente haga clic en el enlace "Olvidé mi contraseña" en la página de inicio de sesión. Recibirás un correo electrónico de inmediato con instrucciones para restablecerlo.</Text>

        </View>

        <Text>Add friends here!</Text>

        <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('RentFlow')
          }
        />
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({

  container:{
    padding: 30,
  }

})


export default HomePage;