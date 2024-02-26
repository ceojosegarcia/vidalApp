import React, {useState, useEffect} from 'react';
import SeparadorImage from '../Iconos/SeparadorImage';
import PuntosImage from '../Iconos/PuntosImage';
import { RadioFooter } from '../StyledComponents';

const FooterRadio = ({height, theme}) => {
    const [altoFooter, setAltoFooter] = useState(80)

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

    return (
        <>
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
        </>
    );
};

export default FooterRadio;