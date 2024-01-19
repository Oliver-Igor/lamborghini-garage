import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 8,
  },
  logoBox: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    padding: 20,
  },
  imgLogo: {
    flex: 1,
    width: '65%',
    resizeMode: 'contain',
  },
  carBrand: {
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
    fontStyle: 'italic',
  },
  carName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  img: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
  },
  priceControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 10,
  },
  priceLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});