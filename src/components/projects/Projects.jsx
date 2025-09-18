import { useMemo, useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import projectsData from '../../data/projects.json';
import GlassCard from '../GlassCard/GlassCard';
import "./Projects.css"
import 'react-lazy-load-image-component/src/effects/blur.css'

const filters = ['All','Clone','Featured','HTML & CSS','JavaScript','Bootstrap','React + Material UI','Fullstack Projects','API Projects','Personal Projects']


const Projects = () => {
    const [active, setActive] = useState('All')

    const filtered = useMemo(() => {
        if (active === 'All') return projectsData
        if (active === 'Featured') return projectsData.filter(p => p.featured)
        return projectsData.filter(p => (p.category || []).includes(active) || (p.tech || []).includes(active))
    }, [active])

    return (
        <Box textAlign={'center'} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
             
                <Box className='TNeon'  maxWidth= "400px" mb={"40px"}>
                    <Typography variant="h3">Portfolio</Typography>
                    <Typography variant="subtitle2">Here's a selection of my recent work, showcasing my skills in creating user-centric and visually appealing interfaces.</Typography>
                </Box>
             

            <Stack direction="row" flexWrap="wrap" gap={1}>

        {filters.map(f => (
            <Chip   key={f} label={f} clickable sx={{
                color: active === f ? "#78f3e2ff" : "rgba(255, 255, 255, 1)",
                textShadow:  " 0 0 5px #fff ,0 0 150px #0ff",
                transition:"text-shadow 0.7s"
              }} onClick={() => setActive(f)} />
        ))}
                
            </Stack>
             
            <Grid
                maxWidth={"1300px"}
                className="porjectsContainer"
                p={"30px"}
                display="grid"
                         gap={2} // spacing between cards
                         sx={{
                         gridTemplateColumns: {
                              xs: "1fr",       // mobile  
                                   sm: "1fr ", // tablet  
                              md:"1fr 1fr 1fr",
                              lg: "1fr 1fr 1fr ", // desktop 
                         },
                         }}
            >
                {filtered.map(p => (
                <Grid item xs={12} sm={6} md={4} key={p.id} sx={{ display: 'flex',m:"20px", maxHeight:"700px"  }}>
                    <GlassCard  sx={{ display: 'flex', flexDirection: 'column', flex: 1, transition: 'transform 200ms ease, box-shadow 200ms ease', '&:hover': { transform: 'translateY(-4px) scale(1.01)', boxShadow: 8 } }}>
                    {p.thumbnail && (
                        <LazyLoadImage
                          src={p.thumbnail}
                          alt={`${p.title} thumbnail`}
                          effect="blur"
                          style={{
                            aspectRatio: '16 / 9',
                            objectFit: 'cover',
                            width: '100%',
                            height: 'auto'
                          }}
                        />
                    )}
                    <CardContent sx={{ flex: 1 }}>
                        <Typography className="TNeon" variant="h6" sx={{ fontWeight: 700 }}>{p.title}</Typography>
                        <Stack direction="row" spacing={1} sx={{ my: 3, flexWrap: 'wrap' }}>
                        {(p.tech || []).map(tag => (<Chip key={tag} label={tag} size="small" sx={{color:"#fff",textShadow:  " 0 0 5px #fff ,0 0 150px #0ff"}} onClick={() => setActive(tag)} />))}
                        </Stack>
                        <Typography className="TNeon" variant="body2" sx={{ opacity: 0.85 }}>{p.description}</Typography>
                    </CardContent>
                    <CardActions sx={{alignSelf:"center", m:"20px"}}>
                        <Button className="TNeonBtn" sx={{color:"#fff"}} size="small" href={p.demo} target="_blank" rel="noreferrer">Demo</Button>
                        <Button className='TNeonBtn' sx={{color:"#fff"}} size="small" href={p.repo} target="_blank" rel="noreferrer">GitHub</Button>
                    </CardActions>
                    </GlassCard>
                </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Projects;
