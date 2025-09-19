import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SpotlightCard from "../../SpotlightCard/SpotLightCard";

const About = () => {
    return (
        <Box textAlign={'center'} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} my={"30px"}>
             <Box   maxWidth= "400px" mb={"40px"}>
                <Typography className='TNeon' sx={{mb:"15px"}} variant="h3">About</Typography>
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
                    <Typography sx={{fontStyle:"italic"}} variant="subtitle2">
                           "Hi, I’m Fares, a 20-year-old  <sapn class="highlightSpan">Frontend developer</sapn> based in Cairo. I started programming <span class="highlightSpan">two years</span> ago, beginning with Python and small console applications. Over time, I explored programming fundamentals, data structures, and OOP with C#. Eventually, I found my passion in frontend development. Currently, I’m building a <span class="highlightSpan">full courses platform</span> using React, Material UI, and Firebase. I also enjoy creating side projects—like a <span class="highlightSpan">web-scraping app</span> that downloads manhwa From a manhwa website and turn it to  PDFs, and an <span class="highlightSpan">OCR-based translator</span> that helps users learn English while reading. I’m always eager to improve my skills and build meaningful applications."
                     </Typography>
                </Box>
            </Box>
        
        </Box>
    )
}

export default About