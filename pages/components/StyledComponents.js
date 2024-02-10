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
    justify-content: center;
    align-items: center;
  `;


export const MyButton = styled.Pressable`
    background-color: darkblue;
`;