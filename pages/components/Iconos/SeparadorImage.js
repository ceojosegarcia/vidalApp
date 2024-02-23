import React from 'react';
import { Image } from 'react-native';

const SeparadorImage = ({theme, estilos}) => {
    return theme.theme === 'light' ? (
        <Image
            source={require('../../../assets/img/Iconos/sep-light.png')}
            style={{...estilos}}
        /> 
    ):(
        <Image
            source={require('../../../assets/img/Iconos/sep-dark.png')}
            style={{...estilos}}
        />
    );
};

export default SeparadorImage;