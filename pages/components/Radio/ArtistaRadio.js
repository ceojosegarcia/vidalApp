import React from 'react';
import { ViewDatosAudio, ViewTituloAudio, MyText, DatoAudio } from '../StyledComponents';
import { useFontLeidas } from '../hooks/useFontLeidas';

const ArtistaRadio = ({theme}) => {
    const { russoOne, openSansBold} = useFontLeidas()

    return (
        <ViewDatosAudio>
        <ViewTituloAudio>
            <MyText 
                theme={theme}
                font= {russoOne}
                dorado    
            >Artista:</MyText>
        </ViewTituloAudio>
        <DatoAudio>
            <MyText 
                theme={theme}
                font= {openSansBold}   
            >El Gran Combo de Puerto Rico</MyText>
        </DatoAudio>
    </ViewDatosAudio>
    );
};

export default ArtistaRadio;