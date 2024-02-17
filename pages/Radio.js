import React from 'react';
import useTheme from './components/hooks/useTheme';
import { Image } from 'react-native';
import { MyText, MyContainer, MyButton, Lateral1, Lateral2, FondoDisco1, FondoDisco2, ContainerRow, Caratula, Mitad, ViewDisco, Disco,SombraDisco} from './components/StyledComponents';
import styled from 'styled-components/native';
import { useWindowDimensions } from 'react-native';
import ButtomTheme from './components/Radio/ButtomTheme';
import Volumen from './components/Radio/Volumen';


const Radio = () => {
    const { theme, toggleTheme } = useTheme();
    const { width, height } = useWindowDimensions();

    const margen = Math.ceil(width * 10 / height / 2 ) / 10;

    const margenLaterales = () =>{
        if(margen < 0.2){
            return 0.2
        }else if(margen >0.3){
            return 0.3
        }else{
            return margen;
        }
    };
    const espCaratula = Math.ceil(((width - (margenLaterales() * 2 * width)) * 0.8))
    
    const handlePress = () => {
        toggleTheme();
    };

    return (
        <MyContainer theme={theme}>
            {theme && (
                <>
                <Mitad>
                <ContainerRow>
                    <Lateral1 margenes={margen.toFixed(1)}>
                        <ButtomTheme></ButtomTheme>
                    </Lateral1>
                    <ViewDisco>
                        <FondoDisco1 theme={theme}></FondoDisco1>
                        <FondoDisco2 theme={theme}></FondoDisco2>
                        <SombraDisco></SombraDisco>
                        <Disco>
                            <Image
                                source={require('../assets/img/Radio/disco.png')}
                                style={{ width: '100%', height: '100%', borderRadius: 100 }}
                            />
                        </Disco>
                        <Caratula margen={`${espCaratula}px`}>
                            <Image
                                source={require('../assets/img/Radio/caratula.jpg')}
                                style={{ width: '100%', height: '100%' }}
                            />
                        </Caratula>
                    </ViewDisco>
                    <Lateral2 margenes={margen}>
                        <Volumen></Volumen>
                    </Lateral2>
                </ContainerRow>
                </Mitad>
                <Mitad>
                    <MyText theme={theme}>Bienvenidos a mi Radio</MyText>
                    <MyText theme={theme} rojo>{`Width Caratula: ${espCaratula}`}</MyText>
                    <MyText theme={theme} azul>{`Laterales: ${margen}`}</MyText>
                    <MyText theme={theme} dorado>{`Width: ${width} / Height: ${height}`}</MyText>
                    <MyButton theme={theme} onPress={handlePress}>
                        <MyText theme={theme}>Cambiar tema</MyText>
                    </MyButton>
                </Mitad>
                </>
            )}
        </MyContainer>
    );
};

export default Radio;