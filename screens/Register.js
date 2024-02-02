import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Dropdown from '../components/CountryPicker';
import { saveUsers } from './ResgisterApi';
import { useForm } from 'react-hook-form';

const rol = ["Propietario", "Inquilino"];

const Register = ({ navigation }) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    saveUsers(data);
    navigation.navigate('RentFlow');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.container_txt}>
        Ingresa tu correo:
      </Text>
      <TextInput 
        inputMode='text' 
        onChangeText={(text) => setValue('email', text)}
        style={styles.container_input}
        placeholder='example@gmail.com'
        {...register("email", {required: 'Email requerido',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 
                message: 'Correo invalido' }
            })}
      ></TextInput>
      {errors.email && (
        <Text style={styles.error_txt}>
          {errors.email.message}
        </Text>
      )}

      <Text style={styles.container_txt}>
        Ingresa tu contraseña:
      </Text>
      <TextInput 
        inputMode='text' 
        onChangeText={(text) => setValue('password', text)}
        placeholder='Contraseña'
        secureTextEntry={true} 
        password={true} 
        style={styles.container_input}
        {...register("password", {required: 'Contraseña requerida',
              minLength: {
                 value: 8,
                message: 'La contraseña tiene que ser mayor a 8 caracteres'
              }
            })}
      ></TextInput>
      {errors.password && (
        <Text style={styles.error_txt}>
          {errors.password.message}
        </Text>
      )}

      <Text style={styles.container_txt}>
        Ingresa tu Nombre:
      </Text>
      <TextInput 
        inputMode='text' 
        onChangeText={(text) => setValue('fullName', text)}
        style={styles.container_input}
        placeholder='Nombres Completos'
        {...register('fullName', { required: 'Campo Obligatorio' })}
      ></TextInput>
      {errors.fullName && (
        <Text style={styles.error_txt}>
          {errors.fullName.message}
        </Text>
      )}



      <Text style={styles.container_txt}>
        Ingresa tu Telefono:
      </Text>
      <TextInput 
        inputMode='numeric' 
        placeholder='0999999999'
        style={styles.container_input}
        onChangeText={(text) => setValue('phone', `+593 ${text}`)}
        {...register("phone", {required: 'Número requerido',
              minLength: {
                // el valor 9 es por el numero de numeros que tiene el numero nacional (Ecuador)
               value:9,
               message: 'El teléfono debe ser de mínimo de 10 números'}
              })}
      ></TextInput>
      {errors.phone && (
        <Text style={styles.error_txt}>
            {errors.phone.message}
        </Text>
      )}

      <Text style={styles.container_txt}>
        Ingresa tu Cedula/DNI:
      </Text>
      <TextInput 
        inputMode='text' 
        placeholder='173927486-3'
        onChangeText={(text) => setValue('uid', text)}
        style={styles.container_input}
        {...register('uid', {required: 'Cedula/DNI requerido',
            minLength: {
                value:9,
                message: 'Cedula invalida'}})}
      ></TextInput>
      {errors.uid && (
        <Text style={styles.error_txt}>
            {errors.uid.message}
        </Text>
      )}

      <TouchableOpacity 
        style={styles.container_button}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.container_button_txt}>
          Registrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.container_button}
        onPress={() => navigation.navigate('RentFlow')}
      >
        <Text style={styles.container_button_txt}>Volver al Inicio</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  error_txt: {
    color: 'red',
  },

  container: {
    marginTop: 40,
    padding: 20,
    flexGrow: 1,
  },

  container_txt: {
    fontSize: 20,
    marginHorizontal: 20,
  },

  container_input: {
    backgroundColor: 'white',
    padding: 7,
    marginVertical: 10,
    borderRadius: 15,
  },

  container_button: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    marginHorizontal: 30,
    marginVertical: 5,
    borderRadius: 10,
  },

  container_button_txt: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Register;
