import { useTheme } from '@mui/material/styles';
import { tokens } from "../../theme";
import TextType from '../../textTypeAnimation/TextType';

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
  const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box width={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Box  maxWidth={"900px"}   sx={{  height:"fit-content", py: { xs: 8, md: 14 },gap:"15px", flexDirection:{xs:"column",md:"row"}, p:"20px", display: 'flex',borderRadius:"10px",  backdropFilter: 'blur(20px)',  backgroundColor: colors.primary[100], justifyContent:"space-between",textAlign: 'center', alignItems:"center" }}>
      
  
      <Stack spacing={4} sx={{ maxWidth: 800 ,margin:"20px" }}>
        <Typography     variant="h1" sx={{ color:colors.secondary[100], fontWeight: 700 }}>Hello, I am Fares</Typography>
          <TextType 
        text={["Frontend Developer", "Web Developer", "React Developer", "javascript Developer"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
            cursorCharacter="|"
            textColors={[colors.secondary[100]]}
            
      />
        <Typography   variant="h4" sx={{ opacity: 0.9, color:colors.secondary[100]}}>I build modern and responsive client-side web apps.</Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} justifyContent="center" sx={{ mt: 2 }}>
         
          <Button   variant="outlined" color="inherit"   startIcon={<DownloadIcon  className='TNeonSvg' />} sx={{color:colors.secondary[100], borderRadius:"20px",  }} component="a" href="/assets/cv/FaresAhmedSalah_FrontendDeveloper.pdf" download aria-label="Download Resume">Download Resume</Button>
          <ScrollLink to="contact" smooth duration={500} offset={-80}>
              <Button  variant="outlined" color="inherit" sx={{ color:colors.secondary[100], backdropFilter: 'blur(10px)',  borderRadius: "20px",  }} startIcon={<WorkIcon className='TNeonSvg' />} component="a" href="mailto:fareselsisi35@gmail.com" aria-label="Hire Me">Hire Me</Button>
          </ScrollLink>
              
          <ScrollLink to="projects" smooth duration={500} offset={-80}>
            <Button variant="outlined"color="inherit" sx={{color:colors.secondary[100],borderRadius:"20px", }}    startIcon={<VisibilityIcon />} component="a" aria-label="View My Work">View My Work</Button>
          </ScrollLink>
        </Stack>
       
      </Stack>
        <Box>
          <Avatar
            sx={{
        width: { xs: 200, sm: 250, md: 250, lg: 300 },
              height: { xs: 200, sm: 250, md: 250, lg: 300 },
            border:`solid 1px ${colors.secondary[100]}`}
       } alt="Fares Ahmed" src="/assets/mePortfolio2.webp" />
          <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 1 }}>
            <Tooltip title="linkedin">
              <IconButton sx={{color:colors.secondary[100]}}  component="a" href="https://www.linkedin.com/in/fares-elsisi-613732321/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon className='TNeonlinkedinSvg' /></IconButton>

            </Tooltip>
            <Tooltip title="github">
              <IconButton sx={{color:colors.secondary[100]}}   component="a" href="https://github.com/Fares-Elsisi-2005" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon className='TNeonGithupSvg' /></IconButton>

            </Tooltip>
            <Tooltip title="instagram">
              <IconButton sx={{color:colors.secondary[100]}}    component="a" href="https://www.instagram.com/fareselsise?igsh=MW55dGduM3FiZzY3aQ==" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon className='TNeonInstagramSvg' /></IconButton>

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

 