import { useTheme } from '@mui/material/styles';
import { tokens } from "../../theme";

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SpotlightCard from "../../SpotlightCard/SpotLightCard"
import LandingPage2Svg from "../../images/servicesimages/landingPage2.svg?react";
import ApiIcon from "../../images/servicesimages/api2.svg?react";
import AppDevelopment from "../../images/servicesimages/reactjs2.svg?react";
import Responsive from "../../images/servicesimages/responsive2.svg?react";
import WebLayout from "../../images/servicesimages/layout2.svg?react";
/* reactjs2.svg */



const Services = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box textAlign={'center'} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
              
            <Box maxWidth="400px" mb={"40px"}>
                <Typography sx={{ color: colors.secondary[100] }} mb={"20px"} variant="h3">SERVICES</Typography>
                <Typography variant="h6" sx={{ color: colors.secondary[100], fontStyle: "italic" }}>I specialize in designing user experiences, crafting engaging interfaces, and building robust web applications that deliver value and usability.</Typography>
            </Box>
            
                      <Box 
                         display="grid"
                         gap={2} // spacing between cards
                         sx={{
                         gridTemplateColumns: {
                              xs: "1fr",       // mobile  
                                   sm: "1fr 1fr", // tablet  
                              md:"1fr 1fr 1fr",
                              lg: "1fr 1fr 1fr ", // desktop 
                         },
                         }}>
         
                <SpotlightCard className="custom-spotlight-card spotlightCard" spotlightColor={colors.secondary[100]}>
                    <Box width={"40%"} m={"0 auto"}>
                        {/* <img   style={{  width:"100%"}} src="/src/images/servicesimages/landingPage.svg" alt="landingPage" /> */}
                        <LandingPage2Svg style={{ color:colors.secondary[100], width: "100%", height: "auto" }} />


                    </Box>
                    <Box   mt={"10px"} >
                        <Typography sx={{color:colors.secondary[100]}}>Landing Page Development</Typography>
                        <Typography sx={{color:colors.secondary[100]}}>Build high-converting landing pages for startups.</Typography>
                    </Box>

            </SpotlightCard>
                 

                 
                <SpotlightCard className="custom-spotlight-card spotlightCard" spotlightColor= {colors.secondary[100]}>
                    <Box width={"40%"} m={"0 auto"} >
                         {/* <img   style={{width:"100%"}} src="/src/images/servicesimages/landingPage2.svg" alt="landingPage" /> */}
                        <Responsive style={{ color:colors.secondary[100], width: "100%", height: "auto" }} />


                    </Box>
                    <Box /* className="TNeon" */ mt={"10px"} >
                        <Typography sx={{color:colors.secondary[100]}}
                        >Responsive Web Design</Typography>
                        <Typography sx={{color:colors.secondary[100]}}>Websites that look great on any device</Typography>
                    </Box>
                </SpotlightCard>
                 
                
                 
                <SpotlightCard className="custom-spotlight-card spotlightCard" spotlightColor={colors.secondary[100]}>
                    <Box width={"40%"} m={"0 auto"}>
                        {/* <img   style={{width:"100%"}} src="/src/images/servicesimages/app-development.svg" alt="landingPage" /> */}
                        <AppDevelopment style={{ color:colors.secondary[100], width: "100%", height: "auto" }} />


                    </Box>
                    <Box /* className="TNeon" */ mt={"10px"} >
                        <Typography sx={{color:colors.secondary[100]}}>React Web Applications</Typography>
                        <Typography sx={{color:colors.secondary[100]}}>Modern, fast, scalable web apps using React js</Typography>
                    </Box>
                    </SpotlightCard>
                     
        
                 
                
                <SpotlightCard className="custom-spotlight-card spotlightCard" spotlightColor={colors.secondary[100]}>
                    <Box width={"40%"} m={"0 auto"}>
                        {/* <img   style={{width:"100%"}} src="/src/images/servicesimages/Api.svg" alt="landingPage" /> */}
                        <ApiIcon style={{ color:colors.secondary[100], width: "100%", height: "auto" }} />


                    </Box>
                    <Box /* className="TNeon" */ mt={"10px"} >
                        <Typography sx={{color:colors.secondary[100]}}>API Integration</Typography>
                        <Typography sx={{color:colors.secondary[100]}}> Connect websites with APIs & third-party services.</Typography>
                    </Box>
                    </SpotlightCard>
                 
        
                 
                
                <SpotlightCard className="custom-spotlight-card spotlightCard" spotlightColor={colors.secondary[100]}>
                    <Box width={"40%"} m={"0 auto"}>
                        {/* <img   style={{width:"100%"}} src="/src/images/servicesimages/web-layout.svg" alt="landingPage" /> */}
                        <WebLayout style={{ color:colors.secondary[100], width: "100%", height: "auto" }} />


                    </Box>
                    <Box /* className="TNeon" */ mt={"10px"} >
                    
                        <Typography sx={{color:colors.secondary[100]}}>Custom Components & UI</Typography>
                        <Typography sx={{color:colors.secondary[100]}}>Tailored UI elements that fit your brand</Typography>
                    </Box>
                    </SpotlightCard>
                 
         
        </Box>
 
        </Box>)
}
export default Services;