import type { Preview } from '@storybook/react'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import '../src/styles/index.scss'
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6'

const preview: Preview = {
  parameters: {
    reactRouter: reactRouterParameters({
      routing: {
        handle: 'Nav',
        path: '*',
      },
    }),
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withRouter,
    // Story => (
    //   <BrowserRouter>
    //     <Story />
    //   </BrowserRouter>
    // ),
  ],
}

export default preview
