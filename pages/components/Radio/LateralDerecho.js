import React from 'react';
import { Lateral2 } from '../StyledComponents';
import Volumen from './Volumen';
import useCalculoMargen from '../hooks/useCalculoMargen';

const LateralDerecho = () => {
    const margen = useCalculoMargen()
    return (
        <Lateral2 margenes={margen.toFixed(1)}>
            <Volumen></Volumen>
        </Lateral2>
    );
};

export default LateralDerecho;