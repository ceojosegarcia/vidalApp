import React from 'react';
import { Image } from 'react-native';

const PuntosImage = ({theme, estilos}) => {
    return theme.theme === 'light' ? (
        <Image
            source={require('../../../assets/img/Iconos/puntos-light.png')}
            style={{ ...estilos}}
        /> 
    ):(
        <Image
            source={require('../../../assets/img/Iconos/puntos-dark.png')}
            style={{ ...estilos }}
        />
    );
};

export default PuntosImage;