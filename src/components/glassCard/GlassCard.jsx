import Card from '@mui/material/Card'

export default function GlassCard({ sx, children, ...props }) {
  return (
    <Card
      {...props}
      className="glass"
      sx={{
        backdropFilter: 'blur(10px)',
        background: 'rgba(17, 24, 39, 0.5)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 2.5,
        ...sx,
      }}
    >
      {children}
    </Card>
  )
} 