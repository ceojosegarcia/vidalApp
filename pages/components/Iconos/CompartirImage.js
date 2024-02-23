import React from 'react';
import { Image } from 'react-native';

const CompartirImage = ({theme}) => {
    return theme.theme === 'light' ? (
        <Image
            source={require('../../../assets/img/Iconos/compartir-light.png')}
            style={{ width: '30px', height: '30px' }}
        /> 
    ):(
        <Image
            source={require('../../../assets/img/Iconos/compartir-dark.png')}
            style={{ width: '30px', height: '30px' }}
        />
    );
};

export default CompartirImage;