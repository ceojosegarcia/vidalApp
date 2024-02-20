import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSeparador = ({theme}) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            style={{
            enableBackground: "new 0 0 25 50",
            width: "20px",
            height: "40px"
            }}
            viewBox="0 0 25 50"
        >
            <Path
            d="M2.32.42c1.18 0 2.13.95 2.13 2.13S3.5 4.68 2.32 4.68.19 3.73.19 2.55 1.15.42 2.32.42zM12.5.42c1.18 0 2.13.95 2.13 2.13s-.95 2.13-2.13 2.13-2.13-.95-2.13-2.13S11.32.42 12.5.42zM22.68.42c1.18 0 2.13.95 2.13 2.13s-.95 2.13-2.13 2.13-2.13-.95-2.13-2.13S21.5.42 22.68.42zM2.32 11.64c1.18 0 2.13.95 2.13 2.13S3.5 15.9 2.32 15.9.19 14.95.19 13.77c0-1.17.96-2.13 2.13-2.13zM12.5 11.64c1.18 0 2.13.95 2.13 2.13s-.95 2.13-2.13 2.13-2.13-.95-2.13-2.13c0-1.17.95-2.13 2.13-2.13zM22.68 11.64c1.18 0 2.13.95 2.13 2.13s-.95 2.13-2.13 2.13-2.13-.95-2.13-2.13c0-1.17.95-2.13 2.13-2.13zM2.32 22.87c1.18 0 2.13.95 2.13 2.13s-.95 2.13-2.13 2.13S.19 26.18.19 25s.96-2.13 2.13-2.13zM12.5 22.87c1.18 0 2.13.95 2.13 2.13s-.95 2.13-2.13 2.13-2.13-.95-2.13-2.13.95-2.13 2.13-2.13zM22.68 22.87c1.18 0 2.13.95 2.13 2.13s-.95 2.13-2.13 2.13-2.13-.95-2.13-2.13.95-2.13 2.13-2.13zM2.32 34.1c1.18 0 2.13.95 2.13 2.13s-.95 2.13-2.13 2.13-2.13-.95-2.13-2.13.96-2.13 2.13-2.13zM12.5 34.1c1.18 0 2.13.95 2.13 2.13s-.95 2.13-2.13 2.13-2.13-.95-2.13-2.13.95-2.13 2.13-2.13zM22.68 34.1c1.18 0 2.13.95 2.13 2.13s-.95 2.13-2.13 2.13-2.13-.95-2.13-2.13.95-2.13 2.13-2.13zM2.32 45.32c1.18 0 2.13.95 2.13 2.13s-.95 2.13-2.13 2.13-2.13-.95-2.13-2.13c0-1.17.96-2.13 2.13-2.13zM12.5 45.32c1.18 0 2.13.95 2.13 2.13s-.95 2.13-2.13 2.13-2.13-.95-2.13-2.13c0-1.17.95-2.13 2.13-2.13zM22.68 45.32c1.18 0 2.13.95 2.13 2.13s-.95 2.13-2.13 2.13-2.13-.95-2.13-2.13c0-1.17.95-2.13 2.13-2.13z"
            style={{
                fill: theme ? theme.iconInactive : "#989898",
            }}
            />
        </Svg>
    );
};

export default SvgSeparador;