import styled from "styled-components/native";

export const MyText = styled.Text`
    color: ${props => {
        if(props.dorado){
            return props.theme.fontDorado
        }else if(props.rojo){
            return props.theme.fontRojo
        }else if(props.azul){
            return props.theme.fontAzul
        }else{
            return props.theme.fontNormal
        }
    }};
`;
export const MyContainer = styled.View`
    background: ${props => props.theme.bgPrimary};
    flex: 1;
  `;
export const ContainerRow = styled.View`
  flex: 1;
  flex-direction: row;
`;
export const MyButton = styled.Pressable`
    background-color: darkblue;
`;

/* LAYOUT RADIO.JS */
export const Lateral = styled.View`
    flex: ${props => (props.margenes > 0.2 ? props.margenes : 0.2)};
`;
export const FondoDisco1 = styled.View`
    background: ${props => props.theme.bgContrast};
    height: 100%; 
    width: 100%;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
`;
export const FondoDisco2 = styled.View`
    background: ${props => props.theme.bgContrast};
    position: absolute;
    width: 100%;
    aspect-ratio: 1;
    bottom: 0;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
`;