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
export const Mitad = styled.View`
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
export const Lateral1 = styled.View`
    flex: ${props => (props.margenes > 0.2 ? props.margenes : 0.2)};
`;
export const Lateral2 = styled.View`
    flex: ${props => (props.margenes > 0.2 ? props.margenes : 0.2)};
    align-items: flex-end;
`;
export const FondoDisco1 = styled.View`
    background: ${props => props.theme.bgContrast};
    height: 100%; 
    width: 100%;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
`;
export const FondoDisco2 = styled.View`
    background: ${props => props.theme.bgContrast};
    position: absolute;
    width: 100%;
    aspect-ratio: 1;
    bottom: 0;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
`;

export const Caratula = styled.View`
    background: violet;
    position: absolute;
    width: 80%;
    aspect-ratio: 1;
    bottom: ${props => ((props.margen) ? props.margen : "40%")};
    z-index: 30;
`;

export const ViewDisco = styled.View`
    background-color: transparent;
    flex: 1;
    flex-direction: column;
    position: relative;
    align-items: center;
`;
export const Disco = styled.View`
    background: green;
    position: absolute;
    width: 80%;
    aspect-ratio: 1;
    bottom: 10%;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
    z-index: 20;
`;
export const SombraDisco = styled.View`
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