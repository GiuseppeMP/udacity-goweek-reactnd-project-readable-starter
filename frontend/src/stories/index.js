import React from 'react'
import { storiesOf } from '@storybook/react'
import Switch from '@material-ui/core/Switch'
import TemplateDefault from 'layouts/TemplateDefault'
import PostCard from 'components/PostCard'
import Posts from 'containers/Posts'

storiesOf('Switch', module).add('Default', () => <Switch color='primary' />)

storiesOf('TemplateDefault', module).add('Default', () => (
  <TemplateDefault
    header={<div>header</div>}
    body={<div>body</div>}
    footer={<div>footer</div>}
  />
))

storiesOf('Posts', module).add('Default', () => <Posts />)

storiesOf('PostCards', module).add('Default', () => (
  <PostCard
    titulo='Storybook Awesome!'
    autor='Giuseppe Pereira'
    numComentarios={10}
    numPontos={113}
    data='Nov 12'
    texto='Desenvolvendo o <PostCards/> usando storybook...'
  />
))
