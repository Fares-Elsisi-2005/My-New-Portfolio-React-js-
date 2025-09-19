import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link as ScrollLink, Events } from 'react-scroll';
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
        const isMobile = useMediaQuery("(max-width:800px)");
    
    return (
        <Box backdropFilter={'blur(20px)'} backgroundColor={"#061621b9"} minHeight={"60vh"} sx={{ display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap:"20px"
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
                <Typography sx={{fontStyle:"italic"}} variant="h4">Fares Ahmed</Typography>
            </Box>
            <Box display={"flex"} flexWrap={"wrap"}>
                {navItems.map((item) => (
                    <ScrollLink to={item.to} smooth duration={500} offset={-80} spy  >
                        <Button  sx={{
                        color:"#ebf7f5ff",
                            fontWeight: 600,
                            "&:hover": {
                            color:"#80ccf9ff"
                        }
                        
                        }}>{item.label}</Button>
                    </ScrollLink>
                ))}
                
               
                
            </Box>
            <Box>
                <Typography >Copyright © 2025 Fares</Typography>
            </Box>
            

            </Box>
            <Box>
                <Typography className="TNeon">Developed with ❤️ by Fares Ahmed</Typography>
            </Box>
       </Box>
    )
}

export default Footer