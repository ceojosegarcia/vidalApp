import React from 'react';
import { Image } from 'react-native';

const ConfigImage = ({theme}) => {
    return theme.theme === 'light' ? (
        <Image
            source={require('../../../assets/img/Iconos/config-light.png')}
            style={{ width: 30, height: 30, resizeMode: 'contain' }}
        /> 
    ):(
        <Image
            source={require('../../../assets/img/Iconos/config-dark.png')}
            style={{ width: 30, height: 30, resizeMode: 'contain' }}
        />
    );
};

export default ConfigImage;