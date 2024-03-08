import React from 'react';
import { Lateral1 } from '../StyledComponents';
import { Pressable } from 'react-native';
import ButtomTheme from './ButtomTheme';
import useCalculoMargen from '../hooks/useCalculoMargen';

const LateralIzquierdo = ({handleTheme}) => {
    const margen = useCalculoMargen()
    return (
        <Lateral1 margenes={margen.toFixed(1)}>
            <Pressable onPress={handleTheme}>
                <ButtomTheme></ButtomTheme>
            </Pressable>
        </Lateral1>
    );
};

export default LateralIzquierdo;