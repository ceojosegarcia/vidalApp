import React from 'react';
import styled from 'styled-components/native';

const FondoButtom = styled.View`
    width: 20px;
    height: 40px;
    background: transparent;
    margin-top: 20px;
    margin-left: 10px;
    position: relative;
    flex-direction: column;
    border: 3px solid #cccccc;
    background: #494949;
    border-radius: 20px;
`;

const ButtomBall = styled.View`
  width: 13px;
  height: 13px;
  border-radius: 100%;
  background-color: #cccccc;
  margin-top: 6px;
`;

const ButtomTheme = () => {
    return (
        <FondoButtom>
          <ButtomBall />  
        </FondoButtom>
    );
};

export default ButtomTheme;