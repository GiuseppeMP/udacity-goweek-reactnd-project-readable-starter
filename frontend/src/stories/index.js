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

storiesOf('PostCard', module).add('Default', () => <PostCard />)

storiesOf('Posts', module).add('Default', () => <Posts />)
