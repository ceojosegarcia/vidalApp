import { darkTheme, lightTheme } from "../theme/theme";
import { useStore } from "../../../store/global/Theme.js";

const useTheme = () =>{
    const tema = useStore((state) => state.theme)

    const toggleTheme = useStore((state) => state.toggleTheme)
    
    const theme = {
        theme : tema,
        bgPrimary: (tema === "dark") ? darkTheme.backgroundColor.primary : lightTheme.backgroundColor.primary,
        bgSecundary: (tema === "dark") ? darkTheme.backgroundColor.secundary : lightTheme.backgroundColor.secundary,
        bgContrast: (tema === "dark") ? darkTheme.backgroundColor.contrast : lightTheme.backgroundColor.contrast,
        bgContrast2: (tema === "dark") ? darkTheme.backgroundColor.contrast2 : lightTheme.backgroundColor.contrast2,
        fontNormal: (tema === "dark") ? darkTheme.fontColor.normal : lightTheme.fontColor.normal,
        fontDorado: (tema === "dark") ? darkTheme.fontColor.dorado : lightTheme.fontColor.dorado,
        fontRojo: (tema === "dark") ? darkTheme.fontColor.rojo : lightTheme.fontColor.rojo,
        fontAzul: (tema === "dark") ? darkTheme.fontColor.azul : lightTheme.fontColor.azul,
        iconInactive: (tema === "dark") ? darkTheme.iconColor.inactive : lightTheme.iconColor.inactive,
        iconActive: (tema === "dark") ? darkTheme.iconColor.active : lightTheme.iconColor.active,
    }

    return {theme, toggleTheme}; 
}

export default useTheme;