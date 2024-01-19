import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
;


export default function BuyButton() {

  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.button}>
      <AntDesign name="shoppingcart" size={24} color="#000" style={styles.icon}/>
        <Text style={styles.text}>Buy</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems:'center',
    marginVertical: 10,
  },
    button: {
        flexDirection: 'row',
        backgroundColor: '#24adbf',
        borderRadius: 10,
        padding: 10,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    icon: {
        color: '#fff',
        marginRight: 10,
    }
})