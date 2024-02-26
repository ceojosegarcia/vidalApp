import React, { useState } from 'react';
import { PanResponder } from 'react-native';
import styled from 'styled-components/native';
import useTheme from '../hooks/useTheme';
import { LinearGradient } from 'expo-linear-gradient';

const FondoVolumen = styled.View`
  width: 10px;
  height: 120px;
  background: transparent;
  margin-top: 20px;
  margin-right: 15px;
  position: relative;
  flex-direction: column;
  border-width: 3px;
  border-color: ${props => ((props.theme) ? props.theme.bgContrast : "#cccccc")};
  border-style: solid;
  background: ${props => ((props.theme) ? props.theme.bgPrimary : "#494949")};
  border-radius: 5px;
  overflow:visible;
`;

const VolumenBarra = styled(LinearGradient).attrs(props => ({
  colors: [props.theme.bgContrast, props.theme.bgContrast2],
}))`
  position: absolute;
  width: 4px;
  height: 100%;
  left: 0px;
  bottom: 1px;
`;

const VolumenBall = styled(LinearGradient).attrs(props => ({
  colors: [props.theme.bgPrimary, props.theme.bgSecundary],
}))`
  width: 18px;
  height: 18px;
  border-width: 2px;
  border-color: ${props => ((props.theme) ? props.theme.bgContrast : "#fff")};
  border-style: solid;
  margin-left: -6px;
  border-radius: 100%;
  margin-top: 6px;
`;

const Volumen = () => {
  const { theme } = useTheme();
  const [position, setPosition] = useState(0);
  const [percentage, setPercentage] = useState(100);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      // Actualiza la posición vertical al mover el dedo
      const newPosition = position + gestureState.dy;

      // rango de VolumenBall
      if (newPosition >= 0 && newPosition <= 106) {
        setPosition(newPosition);

        const newPercentage = 100 - (newPosition / 106) * 100;
        setPercentage(newPercentage);
        console.log(`Porcentaje: ${percentage.toFixed(2)}%`)
      }
    },
  });

  return (
    <FondoVolumen {...panResponder.panHandlers}  theme={theme}>
      <VolumenBarra
        theme={theme}
        style={{
          height: `${percentage.toFixed(0)}%`,
        }}
      />
      <VolumenBall style={{ marginTop: position }}  theme={theme}/>
    </FondoVolumen>
  );
};

export default Volumen;
