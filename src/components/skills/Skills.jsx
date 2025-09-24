import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import skillsData from '../../data/skills.json';
import { useTheme } from '@mui/material/styles';
import { tokens } from "../../theme";

 

const Skills = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    return (
        <Box textAlign={'center'} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
           
                <Box  sx={{color:colors.secondary[100]}}  maxWidth= "400px" mb={"40px"}>
                    <Typography  mb={"20px"} variant="h3">Skills</Typography>
                    <Typography variant="h6"  >What I’m Good At</Typography>
                </Box>
             
            
            <Box sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "wrap",
            gap:"20px"
            }}>
                
                {skillsData.map((category) => (
                    <Box
                        sx={{
            display: "flex",
                            justifyContent: "center",
            alignItems:"center",
            flexDirection: "column",
            flexWrap: "wrap",
                            gap: "20px",
            mb:"25px"
            }}
                        key={category.id}>
                        <Typography  variant='h5'   sx={{color:colors.secondary[100]}} >{category.name}</Typography>
                        <Box
                        sx={{
            display: "flex",
                            justifyContent: "center",
            alignItems:"center",
            flexDirection: "row",
            flexWrap: "wrap",
            gap:"20px"
                            }}>
                            {category.skills.map((skill) => (
                                        <Box key={skill.id}
                                            sx={{
                                                backgroundColor: "#ded3d382",
                                                padding: "20px",
                                                borderRadius: "10px",
                                                boxShadow: "0 5px 25px rgba(1, 1, 1, 0.15)",
                                                textAlign: "center",
                                                width: "100px",
                                                transition: "0.7s ease",
                                                "&:hover": { transform: "scale(1.1)" },
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems:"center"
                                                
                                            }}
                                        >
                                            <Box sx={{ fontSize: "3em", mb:"10px" }}>
                                                <img style={{width:"100%"}} src={skill.image} alt={skill.name} />
                                            </Box>
                                            <Typography sx={{color:colors.secondary[100], fontSize: "1.1em", fontWeight: "600" }} variant='h3'>
                                                {skill.name}
                                            </Typography>
                                        </Box>
                        ))}
                            
            </Box>
                        

                    </Box>
            ))}

            </Box>
        </Box>
            
    )
}

export default Skills