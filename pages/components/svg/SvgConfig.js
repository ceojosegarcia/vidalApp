import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgConfig = ({ bgColor }) => {
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
        d="M47.82 30.93c.26.13.44.33.54.59.1.26.12.52.05.79a24.572 24.572 0 0 1-5.43 9.29c-.2.2-.43.33-.69.39-.26.07-.52.04-.79-.09l-4.15-2.47a19.037 19.037 0 0 1-6.03 3.46v4.85c0 .26-.08.51-.25.74-.16.23-.38.38-.64.44-3.62.79-7.24.79-10.87 0-.26-.06-.48-.21-.64-.44-.16-.24-.25-.48-.25-.74v-4.85c-2.24-.79-4.25-1.94-6.02-3.46L8.5 41.9c-.26.13-.53.16-.79.09-.26-.06-.49-.19-.69-.39-2.5-2.7-4.32-5.79-5.43-9.29-.06-.26-.05-.53.05-.79s.28-.47.55-.59l4.15-2.47c-.4-2.3-.4-4.61 0-6.91l-4.15-2.47c-.26-.13-.45-.33-.55-.59-.09-.26-.11-.52-.05-.79 1.11-3.5 2.92-6.6 5.43-9.3.2-.2.43-.33.69-.39.26-.07.52-.04.79.09l4.15 2.47a19.1 19.1 0 0 1 6.02-3.46V2.27c0-.26.08-.51.25-.74.16-.23.38-.38.64-.44 3.63-.79 7.25-.79 10.87 0 .26.06.48.21.64.44.16.24.25.48.25.74v4.85c2.24.79 4.25 1.94 6.03 3.46L41.5 8.1c.26-.13.52-.16.79-.09.26.06.49.19.69.39 2.5 2.7 4.31 5.79 5.43 9.29.06.26.05.53-.05.79s-.28.47-.54.59l-4.15 2.47c.39 2.3.39 4.61 0 6.91l4.15 2.48zM30.58 19.42c-1.55-1.55-3.41-2.32-5.58-2.32s-4.03.77-5.58 2.32S17.1 22.83 17.1 25s.77 4.03 2.32 5.58 3.4 2.32 5.58 2.32 4.03-.77 5.58-2.32S32.9 27.17 32.9 25s-.77-4.03-2.32-5.58z"
        style={{
            fill: bgColor ? bgColor : "#e6e6e6",
        }}
        />
    </Svg>
  );
};

export default SvgConfig;

