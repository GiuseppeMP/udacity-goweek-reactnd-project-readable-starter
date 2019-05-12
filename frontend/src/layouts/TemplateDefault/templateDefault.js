import React from 'react'
import { Grid } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'

function TemplateDefault({ footer, body, header }) {
  return (
    <>
      <CssBaseline />
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        style={{ height: '100vh' }}
      >
        <Grid item style={{ flex: 2 }}>
          {header}
        </Grid>
        <Grid item style={{ flex: 7 }}>
          {body}
        </Grid>
        <Grid item style={{ flex: 1 }}>
          {footer}
        </Grid>
      </Grid>
    </>
  )
}

TemplateDefault.propTypes = {}

export default TemplateDefault
