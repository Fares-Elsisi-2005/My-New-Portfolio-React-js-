/**
 * Shared MUI TextField sx factory for the Contact form.
 * Accepts the theme `colors` object and returns the full sx styling object.
 *
 * Usage: <TextField sx={textFieldSx(colors)} ... />
 */
export const textFieldSx = (colors) => ({
  gridColumn: 'span 4',

  // Label default (unfocused)
  '& .MuiInputLabel-root': {
    color: colors.secondary[100],
  },

  // Label focused
  '& .MuiInputLabel-root.Mui-focused': {
    color: colors.secondary[100],
  },

  // Label error
  '& .MuiInputLabel-root.Mui-error': {
    color: '#ED4337',
    textShadow: '0 0 8px #ED4337, 0 0 120px #ED4337',
  },

  // Input text color
  '& .MuiFilledInput-input': {
    color: colors.secondary[100],
  },

  // Unfocused underline
  '& .MuiFilledInput-underline:before': {
    borderBottom: '1px solid rgba(255, 255, 255, 0.24)',
  },

  // Focused underline
  '& .MuiFilledInput-underline:after': {
    borderBottom: `2px solid ${colors.secondary[100]}`,
    boxShadow: `0 0 10px ${colors.secondary[100]}`,
  },

  // Error underline
  '& .MuiFilledInput-underline.Mui-error:after': {
    borderBottom: `2px solid ${colors.secondary[100]}`,
    boxShadow: `0 0 10px ${colors.secondary[100]}`,
  },
})
