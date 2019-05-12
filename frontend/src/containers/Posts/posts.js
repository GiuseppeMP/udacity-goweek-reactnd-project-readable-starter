import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PostCard from 'components/PostCard'

export default class posts extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    )
  }
}
