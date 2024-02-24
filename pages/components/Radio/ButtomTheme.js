import React from 'react';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import useTheme from '../hooks/useTheme';

const FondoButtom = styled(LinearGradient).attrs(props => ({
  colors: [props.theme.bgPrimary, props.theme.bgSecundary],
}))`
    width: 20px;
    height: 40px;
    margin-top: 20px;
    margin-left: 10px;
    position: relative;
    flex-direction: column;
    border-width: 3px;
    border-color: ${props => ((props.theme) ? props.theme.bgContrast : "#cccccc")};
    border-style: solid;
    border-radius: 20px;
`;

const ButtomBall = styled(LinearGradient).attrs(props => ({
  colors: [props.theme.bgContrast2, props.theme.bgContrast],
}))`
  width: 14px;
  height: 14px;
  border-radius: 100%;
  margin-top: ${props => ((props.theme.theme && props.theme.theme === "light") ? "16px" : "4px")};
`;

const ButtomTheme = () => {
  const { theme } = useTheme();
    return (
        <FondoButtom theme={theme}>
          <ButtomBall  theme={theme}/>  
        </FondoButtom>
    );
};

export default ButtomTheme;