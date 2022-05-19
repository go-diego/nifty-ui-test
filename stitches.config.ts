import {createStitches} from '@stitches/react'
import {niftyIslandTheme} from '@Nifty-Island/nifty-component-library'

export const {styled, getCssText} = createStitches({
  ...niftyIslandTheme,
  theme: {
    ...niftyIslandTheme.theme,
    constants: {
      filterSidebarWidth: '21rem',
    },
  },
})