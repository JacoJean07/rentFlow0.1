import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import SubirDatosAFirestore from '../configFirebase/pushPagos';
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarDatosFirestore: false,
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../assets/img/MARCA.png')} style={styles.logo} />
          <View style={styles.header_container}>
            <TouchableOpacity
              style={styles.header_container_Link}
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.linkText}>INICIAR SESIÓN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.header_container_Link}
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={styles.linkText}>REGISTRARSE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.header_container_Link}
              onPress={() => {
                this.props.navigation.navigate('HomePage');
                this.setState({ mostrarDatosFirestore: true });
              }}>
              <Text style={styles.linkText}>SOBRE NOSOTROS</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Contenido adicional de la pantalla */}

        {this.state.mostrarDatosFirestore && <SubirDatosAFirestore />}

        <View style={styles.copy_container}>
          <Text style={styles.copy}>&copy; ShadowBrockers 2023</Text>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header_container: {
    flexDirection: 'column',
  },
  header_container_Link: {},
  linkText: {
    color: '#ffffff',
    textAlign: 'center',
    backgroundColor: 'gray',
    margin: 40,
    padding: 20,
    paddingHorizontal: 70,
    borderRadius: 20,
  },
  copy_container: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 5,
  },
  copy: {
    textAlign: 'center',
  },
});

export default HomeScreen;
