import { useEffect, useState } from 'react'
import { Fab, Zoom } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTheme } from '@mui/material/styles';
import { tokens } from "../../theme";


export default function ScrollToTopButton({ onClick }) {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Zoom in={visible}>
      <Fab aria-label="Back to top" onClick={onClick} className="glass" size="small" sx={{ position: 'fixed', right: 16, bottom: 16, backgroundColor:colors.secondary[100], color:colors.primary[100] }}>
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  )
} 