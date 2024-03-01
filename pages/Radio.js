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
import { URL_RADIO } from '../store/global/Constantes';
import { Audio } from 'expo-av';

const Radio = () => {
    const { theme, toggleTheme } = useTheme();
    const { width, height } = useWindowDimensions();    
    const [isPlaying, setIsPlaying] = useState(false)
    const [sound, setSound] = useState();

    useEffect(() => {
        if (isPlaying) {
            const playAudio = async () => {
                const { sound } = await Audio.Sound.createAsync(
                    { uri: URL_RADIO },
                    { shouldPlay: true }
                );
                setSound(sound);
            };

            playAudio();
        } else {
            // Pausar o detener la reproducción cuando isPlaying es falso
            sound && sound.unloadAsync();
        }

        return () => {
            // Descargar el audio cuando el componente se desmonta
            sound && sound.unloadAsync();
        };
    }, [isPlaying]);
    
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
        </MyContainer>
    );
};

export default Radio;