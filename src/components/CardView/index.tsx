import React, {useEffect, useState} from 'react';
import { View, Image, Text, Button } from 'react-native';

import Logo from '../../../assets/logo.png';

import { styles } from './styles';
import Divider from '../Divider';
import { CAR_ASSETS_BASE_URL } from '../../constants/car';
import BuyButton from '../BuyButton'
import { CarModel } from './props';
import { handleNextItem, loadCarData } from './actions';
import {handlePreviousItem} from './actions';

export default function CardView() {
    const [carData, setCarData] = useState<CarModel | null>(null)

    useEffect(() => {
        (async () => {
            await loadCarData(6, setCarData);
            console.log(carData)
            
        })();
    }, []);

    const renderLogoBox = () => {
        return (
            <View style={styles.logoBox}>
                <Image style={styles.imgLogo} source={Logo}></Image>
            </View>
        )
    }

    const renderCarDetails = () => {
        return (
            <View style={{alignItems: 'center'}}>
                <Text style={styles.carBrand}>Lamborghini</Text>
                <Text style={styles.carName}>{carData?.carName}</Text>
            </View>
        )
    }

    const renderCarImage = () => {
        return (<Image style={styles.img} source={{
            uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png`
        }}/>)
    }

    const renderPriceControls = () => {
        return (
            <View style={styles.priceControls}>
                <Button title='<' color={"#01a6b3"} onPress={() => handlePreviousItem(carData, setCarData)}/>
                <Text style={styles.priceLabel}>{carData?.price}</Text>
                <Button title='>' color={"#01a6b3"} onPress={() => handleNextItem(carData, setCarData)}/>
                
            </View>
        )
    }

  return (
    <View style={styles.container}>
        {renderLogoBox()}
        <Divider />
        {renderCarDetails()}
        {renderCarImage()}
        <Divider/>
        <BuyButton/>
        {renderPriceControls()}
    </View>
  );
}