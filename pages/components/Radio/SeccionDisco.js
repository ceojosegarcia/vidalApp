import React, {useEffect} from 'react';
import { ViewDisco, FondoDisco1, FondoDisco2, SombraDisco, Disco, Caratula } from '../StyledComponents';
import { Image } from 'react-native';
import { useSharedValue, useAnimatedStyle, Easing, withRepeat, withTiming, withSpring} from 'react-native-reanimated';
import useCalculoMargen from '../hooks/useCalculoMargen';

const SeccionDisco = ({isPlaying, theme, width, height}) => {

    const margen = useCalculoMargen(width,height)
    const espCaratula = Math.ceil(((width - (margen * 2 * width)) * 0.8))
    
    //ANIMACIONES
    const rotation = useSharedValue(0);
    const animatedStyle = useAnimatedStyle(() => {
        return {
          transform: [{ rotate: `${rotation.value * 360}deg` }],
        };
    });

    useEffect(() => {
        if (isPlaying) {
            rotation.value = withRepeat(
                withTiming(1, { duration: 2500, easing: Easing.linear }),
                -1 // -1 indica repetición infinita
            );
        } else {
            rotation.value = withSpring(0, { damping: 5, stiffness: 100, duration: 500 });
        }
    }, [isPlaying, rotation]);

    return (
        <ViewDisco>
            <FondoDisco1 theme={theme}></FondoDisco1>
            <FondoDisco2 theme={theme}></FondoDisco2>
            <SombraDisco></SombraDisco>
            <Disco style={animatedStyle}>
                <Image
                    source={require('../../../assets/img/Radio/disco.png')}
                    style={{ width: '100%', height: '100%', borderRadius: 100 }}
                />
            </Disco>
            <Caratula margen={`${espCaratula}px`}>
                <Image
                    source={require('../../../assets/img/Radio/caratula.jpg')}
                    style={{ width: '100%', height: '100%' }}
                />
            </Caratula>
        </ViewDisco>
    );
};

export default SeccionDisco;