import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { auth } from "../../configFirebase/firebaseConfig";

export default class UserInfo extends Component {
   
  componentDidMount() {
    this.getInfoUser();
  }

  getInfoUser = () => {
    const user = auth().currentUser();
    if (user) {
      user.providerData.forEach(userInfo => {
        console.log(userInfo);
      });
      console.log(user);
    } else {
      console.log("No hay usuario autenticado");
    }
  };

  render() {
    return (
      <View>
        <Text>User Info...</Text>
      </View>
    );
  }
}

