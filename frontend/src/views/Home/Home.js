import React from 'react'
import Button from '@material-ui/core/Button'
import Posts from 'container/Posts'
const Home = props => {
  return (
    <div>
      <Button variant='contained' color='primary'>
        Primary
      </Button>
      <Posts />
    </div>
  )
}

Home.propTypes = {}

export default Home
