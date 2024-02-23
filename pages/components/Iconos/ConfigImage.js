import React from 'react';
import { Image } from 'react-native';

const ConfigImage = ({theme}) => {
    return theme.theme === 'light' ? (
        <Image
            source={require('../../../assets/img/Iconos/config-light.png')}
            style={{ width: '30px', height: '30px' }}
        /> 
    ):(
        <Image
            source={require('../../../assets/img/Iconos/config-dark.png')}
            style={{ width: '30px', height: '30px' }}
        />
    );
};

export default ConfigImage;