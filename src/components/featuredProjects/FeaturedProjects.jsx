import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import Tooltip from '@mui/material/Tooltip'
import GitHubIcon from '@mui/icons-material/GitHub'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { useTheme } from '@mui/material/styles'
import { tokens } from '../../theme'
import GlassCard from '../glassCard/GlassCard'
import projectsData from '../../data/projects.json'

const featuredProjects = projectsData.filter((p) => p.featured)

export default function FeaturedProjects() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" my="30px">
      {/* Section Header */}
      <Box sx={{ color: colors.secondary[100], maxWidth: '400px', mb: '40px', textAlign: 'center' }}>
        <Typography sx={{ mb: '10px' }} variant="h3">Featured Projects</Typography>
        <Typography variant="h6" sx={{ fontStyle: 'italic', opacity: 0.8 }}>
          A selection of my strongest work — showcasing full-stack, backend, and frontend skills.
        </Typography>
      </Box>

      {/* Project Grid */}
      <Grid
        container
        spacing={4}
        maxWidth="1200px"
        sx={{ px: { xs: 2, md: 4 } }}
        justifyContent="center"
      >
        {featuredProjects.map((project) => (
          <Grid item xs={12} sm={6} key={project.id}>
            <GlassCard
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'transform 200ms ease, box-shadow 200ms ease',
                '&:hover': { transform: 'translateY(-4px) scale(1.01)', boxShadow: 8 },
              }}
            >
              {/* Project Screenshot */}
              {project.thumbnail && (
                <LazyLoadImage
                  src={project.thumbnail}
                  alt={`${project.title} screenshot`}
                  effect="blur"
                  style={{
                    width: '100%',
                    height: '160px',
                    objectFit: 'cover',
                    borderRadius: '10px 10px 0 0',
                    display: 'block',
                  }}
                />
              )}

              <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: '12px !important' }}>
                {/* Title */}
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: colors.secondary[100], lineHeight: 1.3 }}>
                  {project.title}
                </Typography>

                {/* Description — clamped to 2 lines */}
                <Typography
                  variant="body2"
                  sx={{
                    color: colors.secondary[100],
                    opacity: 0.85,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    lineHeight: 1.5,
                  }}
                >
                  {project.description}
                </Typography>

                {/* Tech Stack Chips */}
                <Stack direction="row" flexWrap="wrap" gap={0.5} sx={{ mt: 1 }}>
                  {(project.tech || []).slice(0, 6).map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        backgroundColor: colors.secondary[100],
                        color: colors.primary[100],
                        fontWeight: 600,
                        fontSize: '0.7rem',
                      }}
                    />
                  ))}
                  {project.tech && project.tech.length > 6 && (
                    <Chip
                      label={`+${project.tech.length - 6} more`}
                      size="small"
                      sx={{
                        backgroundColor: 'transparent',
                        border: `1px solid ${colors.secondary[100]}`,
                        color: colors.secondary[100],
                        fontSize: '0.7rem',
                      }}
                    />
                  )}
                </Stack>

                {/* Action Links */}
                <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ mt: 1 }}>
                  <Tooltip title="View Source Code">
                    <IconButton
                      component="a"
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub`}
                      sx={{ color: colors.secondary[100] }}
                    >
                      <GitHubIcon />
                    </IconButton>
                  </Tooltip>
                  {project.demo && (
                    <Tooltip title="Live Demo">
                      <IconButton
                        component="a"
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} live demo`}
                        sx={{ color: colors.secondary[100] }}
                      >
                        <OpenInNewIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                </Stack>
              </CardContent>
            </GlassCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
