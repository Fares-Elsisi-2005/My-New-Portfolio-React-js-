import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import skillsData from '../../data/skills.json';

 

const Skills = () => {
    return (
        <Box textAlign={'center'} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
           
                <Box className='TNeon'  maxWidth= "400px" mb={"40px"}>
                    <Typography variant="h3">Skills</Typography>
                    <Typography variant="subtitle2">see my skills</Typography>
                </Box>
             
            
            <Box sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            gap:"20px"
            }}>
                
                {skillsData.map((skill) => (
                    <Box key={skill.id}
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
                        <Box className= {skill.styleClass}
                            sx={{
                                
                                fontSize: "3em",
                                mb:"10px"
                        }}>
                            <i class={skill.icon}></i>

                        </Box>
                            <Typography className='TNeon' sx={{
                            
                            fontSize: "1.1em",
                            fontWeight: "600"
                        }} variant='h3'>{skill.name}</Typography>
                    </Box>
            ))}
             
               


            </Box>
        </Box>
            
    )
}

export default Skills