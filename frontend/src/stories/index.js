import React from 'react'
import { storiesOf } from '@storybook/react'
import Switch from '@material-ui/core/Switch'
import TemplateDefault from 'layouts/TemplateDefault'
import PostCard from 'components/PostCard'
import Posts from 'containers/Posts'
import { withKnobs, text, number } from '@storybook/addon-knobs'

storiesOf('Switch', module).add('Default', () => <Switch color='primary' />)

storiesOf('TemplateDefault', module).add('Default', () => (
  <TemplateDefault
    header={<div>header</div>}
    body={<div>body</div>}
    footer={<div>footer</div>}
  />
))

storiesOf('Posts', module).add('Default', () => <Posts />)

storiesOf('PostCards', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <PostCard
      titulo={text('Título', 'Storybook Awesome!')}
      autor={text('Autor', 'Giuseppe Pereira')}
      numComentarios={number('Número de Comentários', 10)}
      numPontos={number('Número de Pontos', 113)}
      data={text('Data', 'Abril 14')}
      texto={text('Texto', 'Desenvolvendo o PostCards usando storybook...')}
    />
  ))
