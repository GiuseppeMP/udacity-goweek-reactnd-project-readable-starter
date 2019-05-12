import React, { useState } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'
/**
 * Temas do material ui criado manualmente.
 */
const tLight = createMuiTheme({
  palette: {
    common: { black: '#000', white: '#fff' },
    background: { paper: '#fff', default: 'rgba(255, 255, 255, 1)' },
    primary: {
      light: '#7986cb',
      main: '#3f51b5',
      dark: '#303f9f',
      contrastText: '#fff'
    },
    secondary: {
      light: 'rgba(180, 177, 178, 1)',
      main: 'rgba(65, 61, 61, 1)',
      dark: 'rgba(128, 128, 128, 1)',
      contrastText: 'rgba(255, 255, 255, 1)'
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)'
    }
  }
})

/**
 * Tema dark criado com baseline no tMain.
 */
const darkPallete = {
  palette: {
    common: { black: '#000', white: '#fff' },
    background: { paper: '#000', default: 'rgba(255, 255, 255, 1)' },
    primary: {
      light: '#000',
      main: '#000',
      dark: '#000',
      contrastText: '#fff'
    },
    secondary: {
      light: 'rgba(180, 177, 178, 1)',
      main: 'rgba(65, 61, 61, 1)',
      dark: 'rgba(128, 128, 128, 1)',
      contrastText: 'rgba(255, 255, 255, 1)'
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)'
    }
  }
}
const tDark = createMuiTheme(darkPallete)
const themes = { light: tLight, dark: tDark }

function Default({ children }) {
  const [theme, setTheme] = useState('light')
  return (
    <>
      <Switch
        color='default'
        onChange={(e, checked) =>
          checked ? setTheme('dark') : setTheme('light')
        }
      />
      <MuiThemeProvider theme={themes[theme]}>{children}</MuiThemeProvider>
    </>
  )
}

export default Default
