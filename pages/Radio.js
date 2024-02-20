import React, {useState} from 'react';
import useTheme from './components/hooks/useTheme';
import { Image } from 'react-native';
import { MyText, MyContainer, MyButton, Lateral1, Lateral2, FondoDisco1, FondoDisco2, ContainerRow, 
         Caratula, Mitad, ViewDisco, Disco,SombraDisco, ViewDatosAudio, ViewTituloAudio, DatoAudio, 
         ContainBarras, PlayerTime, PlayerButtom, PlayerConfig, CoverButtom, PlayingButtom,
         RadioFooter} from './components/StyledComponents';
import { useWindowDimensions } from 'react-native';
import ButtomTheme from './components/Radio/ButtomTheme';
import Volumen from './components/Radio/Volumen';
import SvgPlay from './components/svg/SvgPlay';
import SvgCompartir from './components/svg/SvgCompartir';
import SvgConfig from './components/svg/SvgConfig';
import SvgCirculos from './components/svg/SvgCirculos';
import SvgSeparador from './components/svg/SvgSeparador';
import { useFonts } from 'expo-font';


const Radio = () => {
    const { theme, toggleTheme } = useTheme();
    const { width, height } = useWindowDimensions();
    const [fontsLoaded] = useFonts({
        RussoOne : require("../assets/fonts/RussoOne.ttf"),
        OpenSans: require("../assets/fonts/OpenSans.ttf"),
        OpenSansBold: require("../assets/fonts/OpenSansBold.ttf")
    })
    const [isPlaying, setIsPlaying] = useState(false)

    const margen = Math.ceil(width * 10 / height / 2 ) / 10;

    const margenLaterales = () =>{
        if(margen < 0.2){
            return 0.2
        }else if(margen >0.3){
            return 0.3
        }else{
            return margen;
        }
    };
    const espCaratula = Math.ceil(((width - (margenLaterales() * 2 * width)) * 0.8))
    
    const handlePress = () => {
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
                    <Lateral1 margenes={margen.toFixed(1)}>
                        <ButtomTheme></ButtomTheme>
                    </Lateral1>
                    <ViewDisco>
                        <FondoDisco1 theme={theme}></FondoDisco1>
                        <FondoDisco2 theme={theme}></FondoDisco2>
                        <SombraDisco></SombraDisco>
                        <Disco>
                            <Image
                                source={require('../assets/img/Radio/disco.png')}
                                style={{ width: '100%', height: '100%', borderRadius: 100 }}
                            />
                        </Disco>
                        <Caratula margen={`${espCaratula}px`}>
                            <Image
                                source={require('../assets/img/Radio/caratula.jpg')}
                                style={{ width: '100%', height: '100%' }}
                            />
                        </Caratula>
                    </ViewDisco>
                    <Lateral2 margenes={margen}>
                        <Volumen></Volumen>
                    </Lateral2>
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
                    <ContainerRow style={{ marginBottom: "20px" }}>
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
                            <SvgPlay isPlaying={isPlaying} />
                            <PlayingButtom onPress={cambiaPlaying}>
                                 <CoverButtom/>
                            </PlayingButtom>
                        </PlayerButtom>
                        <PlayerConfig>
                            <SvgCompartir></SvgCompartir>
                            <SvgConfig></SvgConfig>
                        </PlayerConfig>
                    </ContainerRow>
                    <RadioFooter>
                        <SvgSeparador theme={theme}></SvgSeparador>
                        <SvgCirculos theme={theme}></SvgCirculos>
                        <SvgSeparador theme={theme}></SvgSeparador>
                    </RadioFooter>
                    <MyButton theme={theme} onPress={handlePress}>
                        <MyText theme={theme}>Cambiar tema</MyText>
                    </MyButton>
                </Mitad>
                </>
            )}
        </MyContainer>
    );
};

export default Radio;