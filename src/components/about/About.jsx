import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SpotlightCard from "../../SpotlightCard/SpotLightCard";

const About = () => {
    return (
        <Box textAlign={'center'} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} my={"30px"}>
             <Box className='TNeon'  maxWidth= "400px" mb={"40px"}>
                <Typography variant="h3">About</Typography>
                <Typography variant="subtitle2">know about my story</Typography>
            </Box>
            <Box maxHeight={"fit-content"} maxWidth={"1200px"} display={"flex"} justifyContent={"space-between"} gap={"7%"} alignItems={"center"}
                sx={{
                    flexDirection: {
                        xs: "column", // mobile  
                        sm: "row", // tablet  
                    }
                }}
            >
                <Box width={"50%"} m={"10px"}>
                    <SpotlightCard className="custom-spotlight-card about spotlightCard" spotlightColor="#880fb854">
                        <img style={{width:"100%", borderRadius:"10px"}} src="/assets/me.jpg" alt="" loading="lazy" decoding="async" />
                    </SpotlightCard>
                </Box>
                <Box  className='TNeon' width={"50%"} m={"10px"}   sx={{          
                    
                }}>
                    <Typography variant="subtitle2">
                            I'm a Frontend Developer skilled in HTML, CSS, JavaScript, REST APIs, and React. I've built several projects through tutorials, including a Product Management System with full CRUD functionality and additional search features.so worked with real APIs by creating a Weather App and a Prayer Times App, along with many creative ideas that helped strengthen my frontend development skills.
                        
                     </Typography>
                </Box>
            </Box>
        
        </Box>
    )
}

export default About