import React, { Component } from 'react'
import PostCard from 'components/PostCard'

export default class posts extends Component {
  render() {
    const PostCardDefault = (
      <PostCard
        titulo='Storybook Awesome!'
        autor='Giuseppe Pereira'
        numComentarios={10}
        numPontos={113}
        data='Nov 12'
        texto='Desenvolvendo o <PostCards/> usando storybook...'
      />
    )

    return (
      <div>
        {PostCardDefault}
        {PostCardDefault}
        {PostCardDefault}
      </div>
    )
  }
}
