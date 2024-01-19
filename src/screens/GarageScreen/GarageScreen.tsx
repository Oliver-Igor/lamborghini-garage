import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CardView from '../../components/CardView';

export function GarageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cameraBox}>
        <View style={styles.triangleCorner}></View>
        <View style={[styles.triangleCorner, styles.topRight]}></View>
        <View style={[styles.triangleCorner, styles.bottomLeft]}></View>
        <View style={[styles.triangleCorner, styles.bottomRight]}></View>

        <CardView/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraBox: {
    width: 350,
    height: '90%',
    overflow: 'hidden',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
  },
  triangleCorner: {
    position: 'absolute',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderTopWidth: 20,
    borderTopColor: '#fff',
    borderRightWidth: 20,
    borderRightColor: 'transparent',
  },
  topRight: {
    top: 0,
    right: 0,
    transform: [{ rotate: '90deg' }],
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    transform: [{ rotate: '-90deg' }],
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    transform: [{ rotate: '180deg' }],
  },
});