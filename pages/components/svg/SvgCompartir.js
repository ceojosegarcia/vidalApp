import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgCompartir = ({ bgColor }) => {
  return (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        style={{
        enableBackground: "new 0 0 50 50",
        width: "30%",
        height: "30%",
        }}
        viewBox="0 0 50 50"
    >
        <Path
        d="M38.29 33.49a7.9 7.9 0 0 0-5.02 1.78l-13.76-8.43c.11-.54.18-1.1.18-1.66 0-.62-.08-1.22-.21-1.79l13.91-8.87a7.902 7.902 0 0 0 4.9 1.69c4.4 0 7.97-3.56 7.97-7.97 0-4.4-3.57-7.97-7.97-7.97s-7.97 3.57-7.97 7.97c0 .62.08 1.22.21 1.79L16.62 18.9a7.902 7.902 0 0 0-4.9-1.69c-4.4 0-7.97 3.57-7.97 7.97 0 4.41 3.57 7.97 7.97 7.97a7.9 7.9 0 0 0 5.02-1.78L30.5 39.8c-.11.54-.17 1.1-.17 1.66 0 4.41 3.57 7.97 7.97 7.97s7.97-3.56 7.97-7.97a7.98 7.98 0 0 0-7.98-7.97z"
        style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            fill: bgColor ? bgColor : "#e6e6e6",
        }}
        />
  </Svg>
  );
};

export default SvgCompartir;

