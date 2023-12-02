import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { set, useForm } from 'react-hook-form';

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
    navigation.navigate('RentFlow');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.container_txt}>
        Ingresa tu correo:
      </Text>
      <TextInput 
        inputMode='email' 
        onChangeText={(email) => setValue('email', email)}
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
        onChangeText={(text) => setValue('nombre', text)}
        style={styles.container_input}
        placeholder='Nombre'
        {...register('nombre', { required: 'Campo Obligatorio' })}
      ></TextInput>
      {errors.nombre && (
        <Text style={styles.error_txt}>
          {errors.nombre.message}
        </Text>
      )}

      <Text style={styles.container_txt}>
        Ingresa tu Apellido:
      </Text>
      <TextInput 
        inputMode='text' 
        onChangeText={(text) => setValue('apellido', text)}
        style={styles.container_input}
        placeholder='Apellido'
        {...register('apellido', { required: 'Campo Obligatorio' })}
      ></TextInput>
      {errors.apellido && (
        <Text style={styles.error_txt}>
          {errors.apellido.message}
        </Text>
      )}

      <Text style={styles.container_txt}>
        Ingresa tu Telefono:
      </Text>
      <TextInput 
        inputMode='numeric' 
        placeholder='0999999999'
        style={styles.container_input}
        onChangeText={(text) => setValue('telefono', text)}
        {...register("telefono", {required: 'Número requerido',
              minLength: {
                // el valor 9 es por el numero de numeros que tiene el numero nacional (Ecuador)
               value:9,
               message: 'El teléfono debe ser de mínimo s10 números'}
              })}
      ></TextInput>
      {errors.telefono && (
        <Text style={styles.error_txt}>
            {errors.telefono.message}
        </Text>
      )}

      <Text style={styles.container_txt}>
        Ingresa tu Cedula/DNI:
      </Text>
      <TextInput 
        inputMode='text' 
        placeholder='173927486-3'
        onChangeText={(text) => setValue('cedula', text)}
        style={styles.container_input}
        {...register('cedula', {required: 'Cedula/DNI requerido',
            minLength: {
                value:9,
                message: 'Cedula invalida'}})}
      ></TextInput>
      {errors.cedula && (
        <Text style={styles.error_txt}>
            {errors.cedula.message}
        </Text>
      )}

      <Text style={styles.container_txt}>Elige un rol:</Text>
      <View style={styles.container_select}>
        <SelectDropdown
          data={rol}
          onSelect={(selectedItem, index) => {
            setValue('rol', selectedItem); // Agrega esta línea para registrar el valor del rol
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          onChangeText={(text) => setValue('rol', text)}
          {...register('rol', { required: 'Selecciona un rol' })}
        />
      </View>
      {errors.rol && (
        <Text style={styles.error_txt}>
            {errors.rol.message}
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
        <Text style={styles.container_button_txt}>Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  error_txt: {
    color: 'red',
  },

  container: {
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

  container_select: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: 'none',
    alignItems: 'center',
    margin: 10,
  }
});

export default Register;
