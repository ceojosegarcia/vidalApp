import React, { useState } from 'react';
import { View, PanResponder } from 'react-native';
import styled from 'styled-components/native';

const FondoVolumen = styled.View`
  width: 10px;
  height: 120px;
  background: transparent;
  margin-top: 20px;
  margin-right: 15px;
  position: relative;
  flex-direction: column;
  border: 3px solid #cccccc;
  background: #494949;
  border-radius: 5px;
  overflow:visible;
`;

const VolumenBarra = styled.View`
  position: absolute;
  width: 4px;
  height: 100%;
  background: #fff;
  left: 0px;
  bottom: 1px;
`;

const VolumenBall = styled.View`
  width: 14px;
  height: 14px;
  border: #fff 1px solid;
  margin-left: -4px;
  border-radius: 100%;
  background-color: #cccccc;
  margin-top: 6px;
`;

const Volumen = () => {
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
    <FondoVolumen {...panResponder.panHandlers}>
      <VolumenBarra
        style={{
          height: `${percentage.toFixed(0)}%`,
        }}
      />
      <VolumenBall style={{ marginTop: position }} />
    </FondoVolumen>
  );
};

export default Volumen;
