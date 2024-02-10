import { create } from 'zustand'

const dark = {
    background : "#494949",
    fontColor: "#e6e6e6",
    buttonTabColor : "#cbcee3",
    buttonTabIcon : "#999999",
    buttonTabActive : "#494949",
    colorDorado : "#fbae17"
}
const light = {
    background : "#cccccc",
    fontColor: "#494949",
    buttonTabColor : "#494949",
    buttonTabIcon : "#999999",
    buttonTabActive : "#ffffff",
    colorDorado : "#cc8e1f"
}

const initialState = {
    theme : "dark",
    background : dark.background,
    fontColor: dark.fontColor,
    buttonTabColor : dark.buttonTabColor,
    buttonTabIcon : dark.buttonTabIcon,
    buttonTabActive : dark.buttonTabActive,
    colorDorado : dark.colorDorado
}

export const useStore = create((set) => ({
    ...initialState,
    toggleTheme: () =>
        set((state) => ({
            ...state,
            theme: state.theme === "light" ? "dark" : "light",
            ...state.theme === "light" ? dark : light,
        })),
}));