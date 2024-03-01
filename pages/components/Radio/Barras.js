import React from 'react';
import { ContainBarras } from '../StyledComponents';
import { Image } from 'react-native';

const Barras = ({theme}) => {
    return (
        <ContainBarras>
            {theme.theme === "light" ? (
                <Image
                    source={require('../../../assets/img/Radio/onda-light.png')}
                    style={{ width: '100%', height: '100%' }}
                />
            ) : (
                <Image
                    source={require('../../../assets/img/Radio/onda-dark.png')}
                    style={{ width: '100%', height: '100%' }}
                />
            )}
        </ContainBarras>
    );
};

export default Barras;