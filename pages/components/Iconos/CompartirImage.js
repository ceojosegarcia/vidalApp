import React from 'react';
import { Image } from 'react-native';

const CompartirImage = ({theme}) => {
    return theme.theme === 'light' ? (
        <Image
            source={require('../../../assets/img/Iconos/compartir-light.png')}
            style={{ width: 30, height: 30, resizeMode: 'contain' }}
        /> 
    ):(
        <Image
            source={require('../../../assets/img/Iconos/compartir-dark.png')}
            style={{ width: 30, height: 30, resizeMode: 'contain' }}
        />
    );
};

export default CompartirImage;