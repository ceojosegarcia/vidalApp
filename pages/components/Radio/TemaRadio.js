import React from 'react';
import { ViewDatosAudio, ViewTituloAudio, MyText, DatoAudio } from '../StyledComponents';
import { useFontLeidas } from '../hooks/useFontLeidas';

const TemaRadio = ({theme}) => {
    const { russoOne, openSans} = useFontLeidas()

    return (
        <ViewDatosAudio>
            <ViewTituloAudio>
                <MyText 
                    theme={theme}
                    font= {russoOne}
                    dorado    
                >Tema:</MyText>
            </ViewTituloAudio>
            <DatoAudio>
                <MyText 
                    theme={theme}
                    font= {openSans}   
                    azul
                >Timbalero y Trampolin</MyText>
            </DatoAudio>
        </ViewDatosAudio>
    );
};

export default TemaRadio;