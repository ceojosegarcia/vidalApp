import React, {useState, useEffect} from 'react';
import useTheme from './components/hooks/useTheme';
import { Image, Pressable } from 'react-native';
import { MyText, MyContainer, MyButton, Lateral1, Lateral2, FondoDisco1, FondoDisco2, ContainerRow, 
         Caratula, Mitad, ViewDisco, Disco,SombraDisco, ViewDatosAudio, ViewTituloAudio, DatoAudio, 
         ContainBarras, PlayerTime, PlayerButtom, PlayerConfig, CoverButtom, PlayingButtom,
         RadioFooter} from './components/StyledComponents';
import { useWindowDimensions } from 'react-native';
import ButtomTheme from './components/Radio/ButtomTheme';
import Volumen from './components/Radio/Volumen';
import PlayImage from './components/Iconos/PlayImage';
import CompartirImage from './components/Iconos/CompartirImage';
import ConfigImage from './components/Iconos/ConfigImage'
import SeparadorImage from './components/Iconos/SeparadorImage';
import PuntosImage from './components/Iconos/PuntosImage'
import { useFonts } from 'expo-font';
import { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const Radio = () => {
    const { theme, toggleTheme } = useTheme();
    const { width, height } = useWindowDimensions();
    const [fontsLoaded] = useFonts({
        RussoOne : require("../assets/fonts/RussoOne.ttf"),
        OpenSans: require("../assets/fonts/OpenSans.ttf"),
        OpenSansBold: require("../assets/fonts/OpenSansBold.ttf")
    })
    const [isPlaying, setIsPlaying] = useState(false)
    const [altoFooter, setAltoFooter] = useState(80)

    const margen = Math.ceil(width * 10 / height / 2 ) / 10;
    //ANIMACIONES
    const rotation = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
          transform: [{ rotate: `${rotation.value * 360}deg` }],
        };
    });

    useEffect(() => {
        if (isPlaying) {
            rotation.value = withSpring(1, { damping: 5, stiffness: 100 });
            console.log(`Reproduciendo ${rotation.value}`)
        } else {
            rotation.value = withSpring(0, { damping: 5, stiffness: 100 });
        }
    }, [isPlaying]);

    const margenLaterales = () =>{
        if(margen < 0.2){
            return 0.2
        }else if(margen >0.3){
            return 0.3
        }else{
            return margen;
        }
    };
    useEffect(()=>{
        if(height < 600){
            setAltoFooter(null)
            return;
        }else if( height < 700){
            setAltoFooter(40)
            return;
        }else if( height < 800){
            setAltoFooter(60)
            return;
        }
    },[height])

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
                        <Pressable onPress={handlePress}>
                            <ButtomTheme></ButtomTheme>
                        </Pressable>
                    </Lateral1>
                    <ViewDisco>
                        <FondoDisco1 theme={theme}></FondoDisco1>
                        <FondoDisco2 theme={theme}></FondoDisco2>
                        <SombraDisco></SombraDisco>
                        <Disco style={animatedStyle}>
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
                    {altoFooter && ( 
                        <RadioFooter altoFooter= {altoFooter}>
                            <SeparadorImage theme={theme} 
                                estilos= {{ width: '5%', height: '50%', position: 'absolute', left: '0px'}}
                                />
                                <PuntosImage theme={theme}
                                    estilos= {{ width: '40%', height: '20%', position: 'absolute', left: '30%', bottom: '20%'}}
                                    />
                            <SeparadorImage theme={theme} 
                                estilos= {{ width: '5%', height: '50%', position: 'absolute', left: '95%'}}
                                />
                        </RadioFooter>
                    )}
                    
                </Mitad>
                </>
            )}
        </MyContainer>
    );
};

export default Radio;