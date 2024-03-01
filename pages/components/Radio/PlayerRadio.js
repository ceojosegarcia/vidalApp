import React from 'react';
import { ContainerRow, MyText, PlayerTime, PlayerButtom, 
         PlayingButtom, CoverButtom, PlayerConfig  } from '../StyledComponents';
import PlayImage from '../Iconos/PlayImage';
import CompartirImage from '../Iconos/CompartirImage';
import ConfigImage from '../Iconos/ConfigImage';
import { useFontLeidas } from '../hooks/useFontLeidas';


const PlayerRadio = ({theme, isPlaying, cambiaPlaying}) => {
    const { openSans} = useFontLeidas()

    return (
        <ContainerRow style={{ marginBottom: "20px" }} >
            <PlayerTime>
                <MyText theme={theme}
                        font= {openSans}
                        size={"32px"} 
                >01:20</MyText>
                <MyText theme={theme}
                        font= {openSans}
                        size={"12px"} azul 
                >En Linea</MyText>
            </PlayerTime>
            <PlayerButtom>
                <PlayImage isPlaying={isPlaying} />
                <PlayingButtom onPress={cambiaPlaying}>
                        <CoverButtom/>
                </PlayingButtom>
            </PlayerButtom>
            <PlayerConfig>
                <CompartirImage theme={theme}></CompartirImage>
                <ConfigImage theme={theme}></ConfigImage>
            </PlayerConfig>
        </ContainerRow>
    );
};

export default PlayerRadio;