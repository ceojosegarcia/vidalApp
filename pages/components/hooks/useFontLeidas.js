import { useFontContext } from "../../context/FontContext"

export const useFontLeidas = () =>{
    const {fonts, loaded} = useFontContext()
    const russoOne = loaded ? "RussoOne" : "sans-serif"
    const openSans = loaded ? "OpenSans" : "sans-serif"
    const openSansBold = loaded ? "OpenSansBold" : "sans-serif"

    return {russoOne, openSans, openSansBold};
}

