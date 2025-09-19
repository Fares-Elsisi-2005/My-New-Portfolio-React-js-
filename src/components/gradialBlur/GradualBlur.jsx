import { useEffect, useState } from 'react'
import { Fab, Zoom } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

export default function ScrollToTopButton({ onClick }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Zoom in={visible}>
      <Fab aria-label="Back to top" onClick={onClick} className="glass" size="small" sx={{ position: 'fixed', right: 16, bottom: 16, backgroundColor:"#6293f4f0", color:"#fff" }}>
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  )
} 