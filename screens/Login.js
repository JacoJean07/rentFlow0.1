import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useForm } from 'react-hook-form';
import { loginUsers } from "./LoginApi";

const Login = ({ navigation }) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const saveToken = async (token) => {
    try {
      if (token){
     await AsyncStorage.setItem('authToken', token);
      console.log('[+] Token almacenado con exito {}', token);
      }else{
              console.error('[-] El token es nulo o indefinido. No se almacenará en AsyncStorage.');
      }
       
    } catch (error) {
      console.error('[-] Error al almacenar el token:', error);
      
    }
  };

  const onSubmit = async (data) => {
    // Puedes manejar la lógica de inicio de sesión aquí
    try {
    console.log(data);
      const token = await loginUsers(data);
    saveToken(token);
    // Luego, puedes navegar a la siguiente pantalla
    navigation.navigate('Propietario');
    }catch(error){
       console.error('Error al iniciar session:', error.message);
       
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.container_txt}>Ingresa tu usuario:</Text>
      <TextInput
        inputMode='text'
        onChangeText={(text) => setValue('username', text)}
        style={styles.container_input}
        placeholder='Usuario'
        {...register('username', { required: 'Campo Obligatorio' })}
      ></TextInput>
      {errors.usuario && (
        <Text style={styles.error_txt}>
            {errors.usuario.message}
        </Text>
      )}

      <Text style={styles.container_txt}>Ingresa tu contraseña:</Text>
      <TextInput
        inputMode='text'
        onChangeText={(text) => setValue('password', text)}
        placeholder='Contraseña'
        secureTextEntry={true}
        password={true}
        style={styles.container_input}
        {...register('password', { required: 'Campo Obligatorio' })}
      ></TextInput>
      {errors.password && (
        <Text style={styles.error_txt}>
            {errors.password.message}
        </Text>
      )}

      <TouchableOpacity
        style={styles.container_button}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.container_button_txt}>Ingresar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.container_button}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.container_button_txt}>Registrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.container_button}
        onPress={() => navigation.navigate('RentFlow')}
      >
        <Text style={styles.container_button_txt}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  error_txt: {
    color: 'red',
    marginTop: 40,
  },

  container: {
    margin: 20,
  },

  container_txt: {
    fontSize: 20,
    margin: 15,
    marginVertical: 30,
  },

  container_input: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 10,
    borderRadius: 15,
  },

  container_button: {
    backgroundColor: 'gray',
    marginVertical: 30,
    paddingVertical: 10,
    marginHorizontal: 30,
    borderRadius: 10,
  },

  container_button_txt: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Login;
