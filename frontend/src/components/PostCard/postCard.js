/* eslint-disable no-useless-computed-key */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  ThumbUp as ThumbUpIcon,
  ThumbDown as ThumbDownIcon,
  MoreVert as MoreVertIcon
} from '@material-ui/icons'

import { red } from '@material-ui/core/colors'

import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  IconButton,
  Avatar
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
  },
  avatar: {
    backgroundColor: red[500]
  },
  actions: {
    display: 'flex'
  }
})

const likeColors = {
  [1]: 'primary',
  [0]: 'default',
  [-1]: 'default'
}

const dislikeColors = {
  [1]: 'default',
  [0]: 'default',
  [-1]: 'primary'
}

function postCard({ titulo, data, texto, autor }) {
  const [like, setLike] = useState(0)
  return (
    <div>
      <Grid container spacing={40}>
        <Grid item key={titulo} xs={12} md={12}>
          <Card className={styles.card}>
            <CardHeader
              avatar={
                <Avatar aria-label='Recipe' className={styles.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              title={autor}
              subheader={data}
            />
            <div className={styles.cardDetails}>
              <CardContent>
                <Typography component='h2' variant='h5'>
                  {titulo}
                </Typography>

                <Typography variant='subtitle1' paragraph>
                  {texto}
                </Typography>

                <Typography variant='subtitle1' color='primary'>
                  Continue reading...
                </Typography>
              </CardContent>
              <CardActions className={styles.actions} disableActionSpacing>
                <IconButton color={dislikeColors[like]} aria-label='Nope!'>
                  <ThumbDownIcon />
                </IconButton>
                <IconButton color={likeColors[like]} aria-label='Gostei!'>
                  <ThumbUpIcon />
                </IconButton>
              </CardActions>
            </div>
          </Card>
        </Grid>
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
