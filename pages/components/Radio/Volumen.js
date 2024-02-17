import React, { useState } from 'react';
import { View, PanResponder } from 'react-native';
import styled from 'styled-components/native';

const FondoVolumen = styled.View`
  width: 13px;
  height: 120px;
  background: transparent;
  margin-top: 20px;
  margin-right: 15px;
  position: relative;
  flex-direction: column;
  border: 3px solid #cccccc;
  background: #494949;
  border-radius: 8px;
`;

const VolumenBall = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: #cccccc;
  margin-top: 6px;
`;

const Volumen = () => {
  const [position, setPosition] = useState(0);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      // Actualiza la posición vertical al mover el dedo
      const newPosition = position + gestureState.dy;
      
      // Asegúrate de que la posición no salga del rango
      if (newPosition >= 0 && newPosition <= 106) {
        setPosition(newPosition);
      }
    },
  });

  return (
    <FondoVolumen {...panResponder.panHandlers}>
      <VolumenBall style={{ marginTop: position }} />
    </FondoVolumen>
  );
};

export default Volumen;
