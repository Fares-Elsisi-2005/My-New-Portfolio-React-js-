import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SpotlightCard from "../../SpotlightCard/SpotLightCard";
import { useTheme } from '@mui/material/styles';
import { tokens } from "../../theme";

 
const About = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box textAlign={'center'} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} my={"30px"}>
             <Box sx={{color:colors.secondary[100]}}    maxWidth= "400px" mb={"40px"}>
                <Typography  sx={{mb:"15px"}} variant="h3">About</Typography>
                <Typography variant="h6" sx={{fontStyle:"italic"}}  >Frontend Developer passionate about building interactive and useful web applications.</Typography>
            </Box>
            <Box maxHeight={"fit-content"} maxWidth={"1200px"} display={"flex"} justifyContent={"space-between"} gap={"7%"} alignItems={"center"}
                sx={{
                    flexDirection: {
                        xs: "column", // mobile  
                        sm: "row", // tablet  
                    }
                }}
            >
                <Box width={"45%"} m={"10px"}>
                    <SpotlightCard className="custom-spotlight-card about spotlightCard" spotlightColor="#880fb854">
                        <img style={{width:"100%", borderRadius:"10px"}} src="/assets/me.jpg" alt="" loading="lazy" decoding="async" />
                    </SpotlightCard>
                </Box>
                <Box    width={"55%"} m={"10px"}   sx={{          
                    
                }}>
                    <Typography sx={{color:colors.secondary[100],fontStyle:"italic"}} variant="subtitle2">
                         
                        "I’m a passionate <sapn style={{ color: colors.blue[100] }}>Frontend Developer</sapn>   with strong experience in building modern, responsive, and user-friendly web applications.
Over the past 10 months, I’ve <sapn style={{ color: colors.blue[100] }}> developed 30+ projects </sapn> ranging from simple apps to full-stack platforms using React.js, JavaScript, and REST APIs.
Currently, I’m working on an<sapn style={{ color: colors.blue[100] }}>online education platform </sapn> with Firebase authentication and payment integration.
I’m eager to bring creativity, clean code, and problem-solving skills to real-world projects and collaborative teams."
                     </Typography>
                </Box>
            </Box>
        
        </Box>
    )
}

export default About