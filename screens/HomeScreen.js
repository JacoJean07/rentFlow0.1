import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';


class HomeScreen extends React.Component {
    render() {
      return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
            <Image source={require('../assets/img/logo.png')} style={styles.logo} />
                <View style={styles.header_container}>
                <TouchableOpacity style={styles.header_container_Link} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.linkText}>INICIAR SESIÓN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.header_container_Link} onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={styles.linkText}>REGISTRARSE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.header_container_Link} onPress={() => this.props.navigation.navigate('HomePage')}>
                    <Text style={styles.linkText}>SOBRE NOSOTROS</Text>
                </TouchableOpacity>
                </View>
            </View>

            <View style={styles.copy_container}>
                <Text style={styles.copy}>&copy; ShadowBrockers 2023</Text>
            </View>
        
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
  header_container_Link: {
    
  },
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

  }
  
});

export default HomeScreen;
