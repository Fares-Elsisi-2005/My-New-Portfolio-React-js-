import { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import MenuIcon from '@mui/icons-material/Menu'
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

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {})
    Events.scrollEvent.register('end', () => {})
    return () => {
      Events.scrollEvent.remove('begin')
      Events.scrollEvent.remove('end')
    }
  }, [])

  return (
    <AppBar position="sticky" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(10px)', background: 'rgba(17, 24, 39, 0.5)',   }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography className="TNeon"   variant="h5" sx={{ fontWeight: 700  }}>Fares</Typography>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Stack direction="row" spacing={1} component="nav" aria-label="Main">
            {navItems.map((item) => (
              <ScrollLink key={item.to} to={item.to} smooth duration={500} offset={-80} spy onSetActive={() => setActive(item.to)}>
                <Button className="TNeon" sx={{
                   color: active === item.to ? "#78f3e2ff" : "inherit",
                  fontWeight: 600,
                   
                 }}>{item.label}</Button>
              </ScrollLink>
            ))}
          </Stack>
        </Box>
        <IconButton aria-label="Open navigation" onClick={() => setMobileOpen(true)} sx={{ display: { xs: 'inline-flex', md: 'none' } }} color="inherit">
          <MenuIcon />
        </IconButton>
      </Toolbar>
          <Drawer anchor="left" open={mobileOpen} onClose={() => setMobileOpen(false)}
               PaperProps={{
    sx: {
      width: 260,
      backdropFilter: 'blur(10px)',
      background: 'rgba(17, 24, 39, 0.5)',
      borderRight: '1px solid rgba(255,255,255,0.08)',
    },
  }}
          >
        <Box role="presentation" sx={{ width: 260, p: 1 }}>
          <List  >
            {navItems.map((item) => (
              <ScrollLink key={item.to} to={item.to} smooth duration={500} offset={-80} spy onSetActive={() => setActive(item.to)}>
                <ListItemButton onClick={() => setMobileOpen(false)}>
                  <ListItemText className="TNeon" primary={item.label} />
                </ListItemButton>
              </ScrollLink>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  )
} 