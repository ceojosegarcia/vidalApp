import React from 'react';
import styled from "styled-components/native";

export const FooterCirculos = styled.View`
    background-color: transparent;
    position: absolute;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 20%;
    height: 12px;
    left: 40%;
    right: 40%;
    top: 50%;
`;
export const Circulos = styled.View`
    background-color: ${props => ((props.theme) ? props.theme : "#999999")};
    width: 12px;
    height: 12px;
    border-radius: 100%;
`;

const SvgCirculos = ({theme}) => {
    return (
        <FooterCirculos>
            <Circulos theme={theme.iconInactive}/>
            <Circulos theme={theme.bgContrast2}/>
            <Circulos theme={theme.bgContrast}/>
        </FooterCirculos>
    );
};

export default SvgCirculos;