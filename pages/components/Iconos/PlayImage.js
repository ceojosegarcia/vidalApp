import React from 'react';
import { Image } from 'react-native';

const PlayImage = ({isPlaying}) => {
    return isPlaying ? (
        <Image
            source={require('../../../assets/img/Radio/pause.png')}
            style={{ width: '35%', height: '35%' }}
        /> 
    ):(
        <Image
            source={require('../../../assets/img/Radio/play.png')}
            style={{ width: '35%', height: '35%', marginLeft: '3%' }}
        />
    );
};

export default PlayImage;