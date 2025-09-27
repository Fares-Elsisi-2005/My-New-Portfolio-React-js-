import { createContext, useState, useMemo, useEffect } from "react";
import { createTheme } from "@mui/material/styles";
 

//color design tokens

export const tokens = (mode) => ({
    ...(mode === "dark" ? {
        primary: {
            100:"#010711", 
        },
        secondary: {
            100:"#E5F0FA"
        },
        blue: {
            100:"#acd1e8"
        }
        
    } : {
         primary: {
            100:"#E5F0FA",  
            },
        secondary: {
            100:"#010711"
            },
        blue: {
            100:"#495e98ff"
        }
        
    })
})


// mui theme settings

export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
        palette: {
            mode: mode,
            ...(mode === "dark")
                ? {
                    primary: {
                    main: colors.primary[100],
                    },
                    background: {
                        default:colors.primary[100]
                    }
            }:{
                    primary: {
                    main: colors.primary[100],
                    },
                    background: {
                        default:colors.primary[100]
                    }
            }
        },
        typography: {
            fontFamily: ["Source Sans Pro", "Sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro", "Sans-serif"].join(","),
                fontSize:40,
            },
            h2: {
                fontFamily: ["Source Sans Pro", "Sans-serif"].join(","),
                fontSize:32,
            },
            h3: {
                fontFamily: ["Source Sans Pro", "Sans-serif"].join(","),
                fontSize:24,
            },
            h4: {
                fontFamily: ["Source Sans Pro", "Sans-serif"].join(","),
                fontSize:20,
            },
            h5: {
                fontFamily: ["Source Sans Pro", "Sans-serif"].join(","),
                fontSize:16,
            },
            h6: {
                fontFamily: ["Source Sans Pro", "Sans-serif"].join(","),
                fontSize:14,
            },
             
        }
    }
}


// constext for color mode

export const ColorModeContext = createContext({
    toggleColorMode: () => {
        
    }
})

export const useMode = () => {
    const [mode, setMode] = useState(() => {
        const savedtheme = localStorage.getItem('mytheme');
        return savedtheme ?savedtheme:"light";
    }
    );
    useEffect(() => {
        localStorage.setItem("mytheme", mode);
    },[mode])
    
    const colorMode = useMemo(() => ({
    toggleColorMode: () => {
        setMode((prev) => (prev === "dark" ? "light" : "dark"));
    }
    }), [setMode]);
    
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);


    return [theme, colorMode]
}

