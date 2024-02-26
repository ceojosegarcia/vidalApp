import React, {useState} from 'react';
import useTheme from './components/hooks/useTheme';
import { Image } from 'react-native';
import { MyText, MyContainer, ContainerRow, 
         Mitad, ViewDatosAudio, ViewTituloAudio, DatoAudio, 
         ContainBarras, PlayerTime, PlayerButtom, PlayerConfig, 
         CoverButtom, PlayingButtom,} from './components/StyledComponents';
import { useWindowDimensions } from 'react-native';
import PlayImage from './components/Iconos/PlayImage';
import CompartirImage from './components/Iconos/CompartirImage';
import ConfigImage from './components/Iconos/ConfigImage'
import { useFonts } from 'expo-font';
import SeccionDisco from './components/Radio/SeccionDisco';
import LateralIzquierdo from './components/Radio/LateralIzquierdo';
import LateralDerecho from './components/Radio/LateralDerecho';
import FooterRadio from './components/Radio/FooterRadio';

const Radio = () => {
    const { theme, toggleTheme } = useTheme();
    const { width, height } = useWindowDimensions();
    const [fontsLoaded] = useFonts({
        RussoOne : require("../assets/fonts/RussoOne.ttf"),
        OpenSans: require("../assets/fonts/OpenSans.ttf"),
        OpenSansBold: require("../assets/fonts/OpenSansBold.ttf")
    })
    const [isPlaying, setIsPlaying] = useState(false)
    
    const handleTheme = () => {
        toggleTheme();
    };

    const cambiaPlaying = () => {
        setIsPlaying(!isPlaying)
    };

    return (
        <MyContainer theme={theme}>
            {theme && (
                <>
                <Mitad>
                <ContainerRow>
                    <LateralIzquierdo 
                        width={width}
                        height={height}
                        handleTheme={handleTheme}
                    />
                    <SeccionDisco
                        isPlaying={isPlaying} 
                        theme={theme}
                        width={width}
                        height={height}
                    />
                    <LateralDerecho 
                        width={width}
                        height={height}
                    />
                </ContainerRow>
                </Mitad>
                <Mitad style={{ paddingTop: '10px' }}>
                    <ViewDatosAudio>
                        <ViewTituloAudio>
                            <MyText 
                                theme={theme}
                                font= {fontsLoaded ? "RussoOne" : "sans-serif"}
                                dorado    
                            >Artista:</MyText>
                        </ViewTituloAudio>
                        <DatoAudio>
                            <MyText 
                                theme={theme}
                                font= {fontsLoaded ? "OpenSansBold" : "sans-serif"}   
                            >El Gran Combo de Puerto Rico</MyText>
                        </DatoAudio>
                    </ViewDatosAudio>
                    <ViewDatosAudio>
                        <ViewTituloAudio>
                            <MyText 
                                theme={theme}
                                font= {fontsLoaded ? "RussoOne" : "sans-serif"}
                                dorado    
                            >Tema:</MyText>
                        </ViewTituloAudio>
                        <DatoAudio>
                            <MyText 
                                theme={theme}
                                font= {fontsLoaded ? "OpenSans" : "sans-serif"}   
                                azul
                            >Timbalero y Trampolin</MyText>
                        </DatoAudio>
                    </ViewDatosAudio>
                    <ContainBarras>
                        <Image
                            source={require('../assets/img/Radio/barras.png')}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </ContainBarras>
                    <ContainerRow style={{ marginBottom: "20px" }} >
                        <PlayerTime>
                            <MyText theme={theme}
                                    font= {fontsLoaded ? "OpenSans" : "sans-serif"}
                                    size={"32px"} 
                            >01:20</MyText>
                            <MyText theme={theme}
                                    font= {fontsLoaded ? "OpenSans" : "sans-serif"}
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
                    <FooterRadio 
                        height={height}
                        theme={theme}
                    />
                    
                </Mitad>
                </>
            )}
        </MyContainer>
    );
};

export default Radio;