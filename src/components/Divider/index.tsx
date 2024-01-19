import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Divider() {
    return (
        <View style={styles.container}>
            <View style={styles.divider} ></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    divider: {
      alignItems: 'center',
      height: 1,
      width: '80%',
      backgroundColor: '#01a6b3',
      marginVertical: 10,
    }
});