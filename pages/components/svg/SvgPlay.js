import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgPlay = ({ isPlaying }) => {
  return isPlaying ? (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        enableBackground: "new 0 0 50 50",
        width: "35%",
        height: "35%",
        marginLeft: "3%"
      }}
      viewBox="0 0 50 50"
    >
      <Path
        d="M4 24.53V2.64C4 .68 6.12-.54 7.82.44l18.96 10.94 18.96 10.94c1.7.98 1.7 3.43 0 4.41L26.77 37.68 7.82 48.62c-1.7.98-3.82-.24-3.82-2.2V24.53z"
        style={{
          fill: "#fff",
        }}
      />
    </Svg>
  ) : (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      x={0}
      y={0}
      style={{
        enableBackground: "new 0 0 50 50",
        width: "35%",
        height: "35%"
      }}
      viewBox="0 0 50 50"
    >
      <Path
        d="M15 48.5H9c-1.1 0-2-.9-2-2v-43c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v43c0 1.1-.9 2-2 2zM41 48.5h-6c-1.1 0-2-.9-2-2v-43c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v43c0 1.1-.9 2-2 2z"
        style={{
            fill: "#fff",
          }}
      />
    </Svg>
  );
};

export default SvgPlay;
