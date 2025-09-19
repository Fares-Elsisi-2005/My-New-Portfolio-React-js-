import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CountUp from "../../countUp/countUp";

const Achivements = () => {
    return (
        <Box  textAlign={'center'} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} my={"50px"}>
            <Box   maxWidth= "400px" mb={"40px"}>
                <Typography className='TNeon' sx={{mb:"15px"}} variant="h3"><i class="fa fa-trophy" aria-hidden="true"></i> Achivements</Typography>
                <Typography  variant="h6" sx={{fontStyle:"italic"}}>what i am proud of </Typography>
            </Box>

            <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap:"20px"
                        }}>
                            
                            
                                <Box 
                                    sx={{
                                        backgroundColor: "#0402021a",
                                        padding: "20px",
                                        borderRadius: "10px",
                                        boxShadow: "0 5px 25px rgba(1, 1, 1, 0.15)",
                                        textAlign: "center",
                                        width: "150px",
                                        transition: "0.7s ease",
                                        "&:hover": {
                                            transform:"scale(1.1)"
                                        }
                                    }}
                                >
                                    <Box  className='TNeon'
                                        sx={{
                                            
                                            fontSize: "3em",
                                            mb:"10px"
                                     }}>
                                    <CountUp
                                        from={0}
                                        to={30}
                                        separator=","
                                        direction="up"
                                        duration={1}
                                        className="count-up-text"
                                        />
                                         
            
                                    </Box>
                                        <Typography  sx={{
                                            fontStyle:"italic",
                                        fontSize: "1.1em",
                                        fontWeight: "600"
                                    }} variant='h3'>projects</Typography>
                                </Box>
                        
                         
                            
                                <Box 
                                    sx={{
                                        backgroundColor: "#0402021a",
                                        padding: "20px",
                                        borderRadius: "10px",
                                        boxShadow: "0 5px 25px rgba(1, 1, 1, 0.15)",
                                        textAlign: "center",
                                        width: "150px",
                                        transition: "0.7s ease",
                                        "&:hover": {
                                            transform:"scale(1.1)"
                                        }
                                    }}
                                >
                                    <Box  className='TNeon'
                                        sx={{
                                            
                                            fontSize: "3em",
                                            mb:"10px"
                                     }}>
                                    <CountUp
                                        from={0}
                                        to={2}
                                        separator=","
                                        direction="up"
                                        duration={1}
                                        className="count-up-text"
                                        />
                                         
            
                                    </Box>
                                        <Typography  sx={{
                                        fontStyle:"italic",
                                        
                                        fontSize: "1.1em",
                                        fontWeight: "600"
                                    }} variant='h3'>years of study</Typography>
                                </Box>
                        
                         
                            
                                <Box 
                                    sx={{
                                        backgroundColor: "#0402021a",
                                        padding: "20px",
                                        borderRadius: "10px",
                                        boxShadow: "0 5px 25px rgba(1, 1, 1, 0.15)",
                                        textAlign: "center",
                                        width: "150px",
                                        transition: "0.7s ease",
                                        "&:hover": {
                                            transform:"scale(1.1)"
                                        }
                                    }}
                                >
                                    <Box  className='TNeon'
                                        sx={{
                                            
                                            fontSize: "3em",
                                            mb:"10px"
                                     }}>
                                    <CountUp
                                        from={0}
                                        to={3}
                                        separator=","
                                        direction="up"
                                        duration={1}
                                        className="count-up-text"
                                        />
                                         
            
                                    </Box>
                                        <Typography  sx={{
                                        fontStyle:"italic",
                                        
                                        fontSize: "1.1em",
                                        fontWeight: "600"
                                    }} variant='h3'>projects that i am proud</Typography>
                                </Box>
                        
                         
                           
            
            
                        </Box>

        </Box>
    )
}


export default Achivements