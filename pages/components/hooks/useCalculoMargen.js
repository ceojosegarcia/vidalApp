
const useCalculoMargen = ({width,height}) => {

    const margen = Math.ceil(width * 10 / height / 2 ) / 10;
    

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