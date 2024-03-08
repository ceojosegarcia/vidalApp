import React, {useState,useEffect} from 'react';
import useTheme from './components/hooks/useTheme';
import { MyContainer, ContainerRow, Mitad } from './components/StyledComponents';
import { useWindowDimensions } from 'react-native';
import SeccionDisco from './components/Radio/SeccionDisco';
import LateralIzquierdo from './components/Radio/LateralIzquierdo';
import LateralDerecho from './components/Radio/LateralDerecho';
import FooterRadio from './components/Radio/FooterRadio';
import ArtistaRadio from './components/Radio/ArtistaRadio';
import PlayerRadio from './components/Radio/PlayerRadio';
import TemaRadio from './components/Radio/TemaRadio';
import Barras from './components/Radio/Barras';
import { SafeAreaView, StatusBar } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { URL_RADIO } from '../store/global/Constantes';
import { Audio } from 'expo-av';

const Radio = () => {
    const { theme, toggleTheme } = useTheme();
    const { width, height } = useWindowDimensions();    
    const [isPlaying, setIsPlaying] = useState(false)
    const [sound, setSound] = useState();
    const configureAudioMode = async () => {
        try {
          await Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            interruptionModeIOS: 1, 
            playsInSilentModeIOS: true,
            playsInSilentLockedModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: 1,
            playThroughEarpieceAndroid: false,
            staysActiveInBackground: true,
          });
        } catch (error) {
          console.error('Error al configurar el modo de audio:', error);
        }
      };
      configureAudioMode();
    
      useEffect(()=>{
        const playAudio = async () => {
            const { sound } = await Audio.Sound.createAsync(
                { uri: URL_RADIO },
                { shouldPlay: false }
            );
            setSound(sound);
          };
          playAudio();
      },[])
      
    const playRadio = async () => {
        if( sound )
        await sound.playAsync();
    }
    const pauseRadio = async () => {
        if( sound )
        await sound.pauseAsync();
    }
    useEffect(() => {
        if (isPlaying) {
            
            playRadio()
            
        } else {
            // Pausar o detener la reproducción cuando isPlaying es falso
            pauseRadio()
        }

        
    }, [isPlaying]);

    
    
    const handleTheme = () => {
        toggleTheme();
    };

    const cambiaPlaying = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "transparent", marginTop: StatusBar.currentHeight }}>
        <MyContainer theme={theme}>
            {theme && (
                <>
                <Mitad>
                <ContainerRow>
                    <LateralIzquierdo 
                        handleTheme={handleTheme}
                    />
                    <SeccionDisco
                        isPlaying={isPlaying} 
                        theme={theme}
                        width={width}
                        height={height}
                    />
                    <LateralDerecho 
                        
                    />
                </ContainerRow>
                </Mitad>
                <Mitad style={{ paddingTop: '10px' }}>
                    <ArtistaRadio theme={theme} />
                    <TemaRadio theme={theme} />
                   
                    <Barras theme={theme}/>
                    
                    <PlayerRadio 
                        theme={theme}
                        isPlaying={isPlaying}
                        cambiaPlaying={cambiaPlaying}
                    />

                    <FooterRadio 
                        height={height}
                        theme={theme}
                    />
                    
                </Mitad>
                </>
            )}
            <StatusBar style="dark" />
         </MyContainer>
        </SafeAreaView>
    );
};

export default Radio;