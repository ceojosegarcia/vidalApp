import React from 'react';
import useTheme from './components/hooks/useTheme';
import { MyText, MyContainer, MyButton } from './components/StyledComponents';
import styled from 'styled-components/native';


const Mitad = styled.View`
    background-color: orange;
    flex: 1;
`;
const Mitad2 = styled.View`
    background-color: orange;
    flex: 1;
`;
const ContainerRow = styled.View`
    background-color: violet;
    flex: 1;
    flex-direction: row;
`;
const ViewDisco = styled.View`
    background-color: silver;
    flex: 1;
    justify-content:center;
`;
const Lateral = styled.View`
    background-color: darkgray;
    flex: 0.2;
    justify-content:center;
`;

const Radio = () => {
    const { theme, toggleTheme } = useTheme();
    
    const handlePress = () => {
        toggleTheme();
    };
    

    return (
        <MyContainer theme={theme}>
            {theme && (
                <>
                <Mitad>
                    <ContainerRow>
                    <Lateral></Lateral>
                    <ViewDisco>
                        <MyText theme={theme}>Bienvenidos a mi Radio</MyText>
                        <MyText theme={theme} rojo>{theme.bgPrimary}</MyText>
                        <MyText theme={theme} azul>{theme.bgSecundary}</MyText>
                        <MyText theme={theme} dorado>{theme.bgContrast}</MyText>
                        <MyButton theme={theme} onPress={handlePress}>
                            <MyText theme={theme}>Cambiar tema</MyText>
                        </MyButton>
                    </ViewDisco>
                    <Lateral></Lateral>
                    </ContainerRow>
                </Mitad>
                <Mitad2>

                </Mitad2>
                </>
            )}
        </MyContainer>
    );
};

export default Radio;