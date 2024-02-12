import React from 'react';
import useTheme from './components/hooks/useTheme';
import { Image } from 'react-native';
import { MyText, MyContainer, MyButton, Lateral, FondoDisco1, FondoDisco2, ContainerRow} from './components/StyledComponents';
import styled from 'styled-components/native';
import { useWindowDimensions } from 'react-native';


const Mitad = styled.View`
    flex: 1;
`;
const ViewDisco = styled.View`
    background-color: transparent;
    flex: 1;
    flex-direction: column;
    position: relative;
    align-items: center;
`;
const Disco = styled.View`
    background: green;
    position: absolute;
    width: 80%;
    aspect-ratio: 1;
    bottom: 10%;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
    z-index: 20;
`;
const Caratula = styled.View`
    background: violet;
    position: absolute;
    width: 80%;
    aspect-ratio: 1;
    bottom: 40%;
    z-index: 30;
`;
const SombraDisco = styled.View`
    background: rgba(0,0,0, 0.12);
    position: absolute;
    width: 84%;
    aspect-ratio: 1;
    bottom: 8%;
    left:9%;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
    z-index: 10;
`;

const Radio = () => {
    const { theme, toggleTheme } = useTheme();
    const { width, height } = useWindowDimensions();

    const margen = Math.ceil(width * 10 / height / 2 ) / 10;
    
    const handlePress = () => {
        toggleTheme();
    };

    return (
        <MyContainer theme={theme}>
            {theme && (
                <>
                <Mitad>
                <ContainerRow>
                    <Lateral margenes={margen.toFixed(1)}></Lateral>
                    <ViewDisco>
                        <FondoDisco1 theme={theme}></FondoDisco1>
                        <FondoDisco2 theme={theme}></FondoDisco2>
                        <SombraDisco></SombraDisco>
                        <Disco>
                            <Image
                                source={'../assets/img/Radio/disco.png'}
                                style={{ width: '100%', height: '100%', borderRadius: 100 }}
                            />
                        </Disco>
                        <Caratula>
                            <Image
                                source={'../assets/img/Radio/caratula.jpg'}
                                style={{ width: '100%', height: '100%' }}
                            />
                        </Caratula>
                    </ViewDisco>
                    <Lateral margenes={margen}></Lateral>
                </ContainerRow>
                </Mitad>
                <Mitad>
                    <MyText theme={theme}>Bienvenidos a mi Radio</MyText>
                    <MyText theme={theme} rojo>{`Redondeao %: ${Math.ceil(width*10/height/2)}`}</MyText>
                    <MyText theme={theme} azul>{`Laterales: ${margen.toFixed(1)}`}</MyText>
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