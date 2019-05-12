import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Hidden,
  CardMedia
} from '@material-ui/core'

const styles = theme => ({
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
})

function postCard({ titulo, data, texto }) {
  return (
    <div>
      <Grid item key={titulo} xs={12} md={6}>
        <Card className={styles.card}>
          <div className={styles.cardDetails}>
            <CardContent>
              <Typography component='h2' variant='h5'>
                {titulo}
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                {data}
              </Typography>
              <Typography variant='subtitle1' paragraph>
                {texto}
              </Typography>
              <Typography variant='subtitle1' color='primary'>
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={styles.cardMedia}
              image='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E' // eslint-disable-line max-len
              title='Image title'
            />
          </Hidden>
        </Card>
      </Grid>
    </div>
  )
}

postCard.propTypes = {
  titulo: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired,
  numComentarios: PropTypes.number.isRequired,
  numPontos: PropTypes.string.isRequired,
  data: PropTypes.string,
  texto: PropTypes.string
}

export default postCard
