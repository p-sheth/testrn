import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Login extends React.Component {
    render() {
      return (     
        <View>
         <Text>Hiii from {this.props.name}</Text>
         </View>
      );
    }
  }