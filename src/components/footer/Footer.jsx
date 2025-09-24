import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link as ScrollLink, Events } from 'react-scroll';
import { useTheme } from '@mui/material/styles';
import { tokens } from "../../theme";


const navItems = [
  { to: 'hero', label: 'Home' },
  { to: 'services', label: 'Services' },
  { to: 'projects', label: 'Projects' },
  { to: 'skills', label: 'Skills' }, 
  { to: 'about', label: 'About' },
  { to: 'achievements', label: 'Achievements' },
  { to: 'contact', label: 'Contact' },
]



const Footer = () => {
    const isMobile = useMediaQuery("(max-width:900px)");
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    return (
        <Box backdropFilter={'blur(20px)'} backgroundColor={colors.secondary[100]} minHeight={isMobile ? "55vh" : "35vh"} sx={{ display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap:"20px",
            padding:"20px"
        }}>
             <Box  sx={{
            display: "flex",
            justifyContent: "center",
            alignItems:"center",
            flexDirection: isMobile ? "column" : "row", 
            gap:"40px"
             
        }}>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"20px"}>
                <Avatar sx={{width:"80px", height:"80px"}}  alt="Fares Ahmed" src="/assets/team-1.png" />
                <Typography sx={{color:colors.primary[100],fontStyle:"italic"}} variant="h4">Fares Ahmed</Typography>
            </Box>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexWrap={"wrap"}>
                {navItems.map((item) => (
                    <ScrollLink to={item.to} smooth duration={500} offset={-80} spy  >
                        <Button  sx={{
                        color:colors.primary[100],
                            fontWeight: 600,
                            "&:hover": {
                            color:"#fff"
                        }
                        
                        }}>{item.label}</Button>
                    </ScrollLink>
                ))}
                
               
                
            </Box>
            <Box>
                <Typography sx={{color:colors.primary[100]}} >Copyright © 2025 Fares</Typography>
            </Box>
            

            </Box>
            <Box>
                <Typography sx={{color:colors.primary[100]}}>Developed with ❤️ by Fares Ahmed</Typography>
            </Box>
       </Box>
    )
}

export default Footer