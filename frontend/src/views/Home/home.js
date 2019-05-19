import React from 'react'
import Button from '@material-ui/core/Button'
import { Postagens } from 'containers'
import { categorias } from 'services'
const Home = props => {
  return (
    <div>
      <Button variant='contained' color='primary' onClick={categorias.listar}>
        Primary
      </Button>
      <Postagens />
    </div>
  )
}

Home.propTypes = {}

export default Home
