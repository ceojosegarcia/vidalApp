import { useWindowDimensions, Platform } from "react-native";


const useCalculoMargen = () => {
    const { width, height } = useWindowDimensions(); 

    const calculoMargen = () =>{
        if(Platform.OS === "web"){
            return Math.ceil(width * 10 / height / 2 ) / 10;
        }else{
            return Math.ceil(width * 10 / height / 2.5 ) / 10;
        }
    }

    const margen = calculoMargen();

    const margenLaterales = () =>{
        if(margen < 0.2){
            return 0.2
        }else if(margen >0.3){
            return 0.3
        }else{
            return margen;
        }
    };

    return margenLaterales();
};

export default useCalculoMargen;