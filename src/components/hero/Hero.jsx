import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import DownloadIcon from '@mui/icons-material/Download'
import WorkIcon from '@mui/icons-material/Work'
import VisibilityIcon from '@mui/icons-material/Visibility'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
/* import TelegramIcon from '@mui/icons-material/Telegram' */
import { Link as ScrollLink } from 'react-scroll'


export default function Hero() {
  return (
    <Box width={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Box  maxWidth={"900px"}   sx={{ boxShadow:" rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",  height:"fit-content", py: { xs: 8, md: 14 },gap:"15px", flexDirection:{xs:"column",md:"row"}, p:"20px", display: 'flex',borderRadius:"10px",  backdropFilter: 'blur(20px)',  backgroundColor:"#093e6189", justifyContent:"space-between",textAlign: 'center', alignItems:"center" }}>
      
  
      <Stack spacing={2} sx={{ maxWidth: 800 ,margin:"20px" }}>
        <Typography className='TNeon'  component="h1" variant="h3" sx={{ fontWeight: 700 }}>Hello, I am Fares</Typography>
        <Typography className='TNeon' component="h2" variant="h4" sx={{ fontWeight: 700 }}>Frontend Developer</Typography>
        <Typography /* className='TNeon' */ variant="h6" sx={{ opacity: 0.9, color:"#fff" }}>I build modern and responsive client-side web apps.</Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent="center" sx={{ mt: 2 }}>
         
          <Button  className='TNeonBtn' variant="outlined" color="inherit"   startIcon={<DownloadIcon className='TNeonSvg' />} sx={{color:"white", borderRadius:"20px", fontStyle:"italic"}} component="a" href="/assets/cv/FaresAhmedSalah_FrontendDeveloper.pdf" download aria-label="Download Resume">Download Resume</Button>
          <ScrollLink to="contact" smooth duration={500} offset={-80}>
              <Button className='TNeonBtn' variant="outlined" color="inherit" sx={{ color: "#fff", backdropFilter: 'blur(10px)', background: 'rgba(17, 24, 39, 0.5)', borderRadius: "20px",fontStyle:"italic" }} startIcon={<WorkIcon className='TNeonSvg' />} component="a" href="mailto:fares@example.com" aria-label="Hire Me">Hire Me</Button>
          </ScrollLink>
              
          <ScrollLink to="projects" smooth duration={500} offset={-80}>
            <Button className='TNeonBtn' sx={{borderRadius:"20px",fontStyle:"italic"}} variant="outlined" color="inherit" startIcon={<VisibilityIcon className='TNeonSvg'  />} aria-label="View My Work">View My Work</Button>
          </ScrollLink>
        </Stack>
       
      </Stack>
        <Box>
          <Avatar
            sx={{
        width: { xs: 200, sm: 250, md: 250, lg: 300 },
    height: { xs: 200, sm: 250, md: 250, lg: 300 },}
       } alt="Fares Ahmed" src="/assets/team-1.png" />
          <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 1 }}>
            <Tooltip title="linkedin">
              <IconButton   component="a" href="https://www.linkedin.com/in/fares-elsisi-613732321/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon className='TNeonlinkedinSvg' /></IconButton>

            </Tooltip>
            <Tooltip title="github">
              <IconButton   component="a" href="https://github.com/Fares-Elsisi-2005" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon className='TNeonGithupSvg' /></IconButton>

            </Tooltip>
            <Tooltip title="instagram">
              <IconButton   component="a" href="https://www.instagram.com/fareselsise?igsh=MW55dGduM3FiZzY3aQ==" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon className='TNeonInstagramSvg' /></IconButton>

            </Tooltip>
            {/* <Tooltip title="telegram">
              <IconButton   component="a" href="https://t.me" target="_blank" rel="noreferrer" aria-label="Telegram"><TelegramIcon className='TNeonTelegramSvg' /></IconButton>

            </Tooltip> */}
            
        </Stack>
     </Box>
        
      
      </Box>
    </Box>
  )
} 

 