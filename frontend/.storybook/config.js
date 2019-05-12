import { configure } from '@storybook/react'
import { themes } from '@storybook/theming'
import { addParameters } from '@storybook/react'

// Option defaults.
addParameters({
  options: {
    theme: themes.light
  }
})

function loadStories() {
  require('../src/stories')
}

configure(loadStories, module)
