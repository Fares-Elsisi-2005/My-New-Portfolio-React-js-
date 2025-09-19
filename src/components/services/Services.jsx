import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SpotlightCard  from "../../SpotlightCard/SpotLightCard"
const Services = () => {
    return (
        <Box textAlign={'center'} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
              
            <Box   maxWidth= "400px" mb={"40px"}>
                <Typography className='TNeon' mb={"20px"} variant="h3">SERVICES</Typography>
                <Typography variant="h6" sx={{fontStyle:"italic"}}>I specialize in designing user experiences, crafting engaging interfaces, and building robust web applications that deliver value and usability.</Typography>
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
         
                <SpotlightCard className="custom-spotlight-card spotlightCard" spotlightColor="rgba(0, 229, 255, 0.2)">
                    <Box width={"40%"} m={"0 auto"}>
                        <img className='NeonPng' style={{width:"100%"}} src="/assets/servicesimages/landingPage.png" alt="landingPage" />

                    </Box>
                    <Box /* className="TNeon" */ mt={"20px"} >
                        <Typography>Landing Page Development</Typography>
                        <Typography >Build high-converting landing pages for startups.</Typography>
                    </Box>

            </SpotlightCard>
                 

                 
                <SpotlightCard className="custom-spotlight-card spotlightCard" spotlightColor="rgba(0, 229, 255, 0.2)">
                    <Box width={"40%"} m={"0 auto"}>
                        <img className='NeonPng' style={{width:"100%"}} src="/assets/servicesimages/responsive-page.png" alt="landingPage" />

                    </Box>
                    <Box /* className="TNeon" */ mt={"20px"} >
                        <Typography
                        >Responsive Web Design</Typography>
                        <Typography>Websites that look great on any device</Typography>
                    </Box>
            </SpotlightCard>
                 
                
                 
                <SpotlightCard className="custom-spotlight-card spotlightCard" spotlightColor="rgba(0, 229, 255, 0.2)">
                    <Box width={"40%"} m={"0 auto"}>
                        <img className='NeonPng' style={{width:"100%"}} src="/assets/servicesimages/app-development.png" alt="landingPage" />

                    </Box>
                    <Box /* className="TNeon" */ mt={"20px"} >
                        <Typography>React Web Applications</Typography>
                        <Typography>Modern, fast, scalable web apps using</Typography>
                    </Box>
                    </SpotlightCard>
                     
        
                 
                
                <SpotlightCard className="custom-spotlight-card spotlightCard" spotlightColor="rgba(0, 229, 255, 0.2)">
                    <Box width={"40%"} m={"0 auto"}>
                        <img className='NeonPng' style={{width:"100%"}} src="/assets/servicesimages/Api.png" alt="landingPage" />

                    </Box>
                    <Box /* className="TNeon" */ mt={"20px"} >
                        <Typography>API Integration</Typography>
                        <Typography> Connect websites with APIs & third-party services.</Typography>
                    </Box>
                    </SpotlightCard>
                 
        
                 
                
                <SpotlightCard className="custom-spotlight-card spotlightCard" spotlightColor="rgba(0, 229, 255, 0.2)">
                    <Box width={"40%"} m={"0 auto"}>
                        <img className='NeonPng' style={{width:"100%"}} src="/assets/servicesimages/web-layout.png" alt="landingPage" />

                    </Box>
                    <Box /* className="TNeon" */ mt={"20px"} >
                    
                        <Typography>Custom Components & UI</Typography>
                        <Typography>Tailored UI elements that fit your brand</Typography>
                    </Box>
                    </SpotlightCard>
                 
         
        </Box>
 
    </Box>)
}
export default Services;