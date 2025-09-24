import { useContext, useState ,useEffect} from "react";
import { ColorModeContext, tokens } from "../../theme";
import { useTheme } from '@mui/material/styles';


import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
 
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import MenuIcon from '@mui/icons-material/Menu'
import LightModeOutLinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutLinedIcon from "@mui/icons-material/DarkModeOutlined";
 
import { Link as ScrollLink, Events } from 'react-scroll'

const navItems = [
  { to: 'hero', label: 'Home' },
  { to: 'services', label: 'Services' },
  { to: 'projects', label: 'Projects' },
  { to: 'skills', label: 'Skills' }, 
  { to: 'about', label: 'About' },
  { to: 'achievements', label: 'Achievements' },
  { to: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('hero')
   const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {})
    Events.scrollEvent.register('end', () => {})
    return () => {
      Events.scrollEvent.remove('begin')
      Events.scrollEvent.remove('end')
    }
  }, [])

  return (
    <AppBar position="sticky" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(10px)', background:colors.secondary[100],   }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
           <Typography variant="h5" sx={{ color: colors.primary[100], fontWeight: 700 }}>Fares</Typography>
        
        <Tooltip  title="theme">
            <IconButton sx={{color:colors.primary[100]}} onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ?
                    (<DarkModeOutLinedIcon  />) :
                    (<LightModeOutLinedIcon />)
                    
                }
            </IconButton>
        </Tooltip>
                
       </Box>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Stack direction="row" spacing={1} component="nav" aria-label="Main">
            {navItems.map((item) => (
              <ScrollLink key={item.to} to={item.to} smooth duration={500} offset={-80} spy onSetActive={() => setActive(item.to)}>
                <Button  sx={{
                   color: active === item.to ?  "inherit":colors.primary[100] ,
                  fontWeight: 600,
                   
                 }}>{item.label}</Button>
              </ScrollLink>
            ))}
          </Stack>
        </Box>
        <IconButton aria-label="Open navigation" onClick={() => setMobileOpen(true)} sx={{color:colors.primary[100], display: { xs: 'inline-flex', md: 'none' } }} >
          <MenuIcon />
        </IconButton>
    
      </Toolbar>

          <Drawer anchor="left" open={mobileOpen} onClose={() => setMobileOpen(false)}
               PaperProps={{
    sx: {
      width: 260,
      backdropFilter: 'blur(10px)',
      background:  colors.primary[100],
      borderRight: '1px solid rgba(255,255,255,0.08)',
    },
  }}
          >
        <Box role="presentation" sx={{ width: 260, p: 1 }}>
          <List  >
            {navItems.map((item) => (
              <ScrollLink key={item.to} to={item.to} smooth duration={500} offset={-80} spy onSetActive={() => setActive(item.to)}>
                <ListItemButton onClick={() => setMobileOpen(false)}>
                  <ListItemText sx={{color:colors.secondary[100]}}  primary={item.label} />
                </ListItemButton>
              </ScrollLink>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  )
} 