import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'

const mainTheme = {
  color: {
    backgroud: 'white',
    text: 'black',
  }
}

const GlobalStyels = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.color.background}
  }
`

export default function Layout({ children }) {
  return (
      <ThemeProvider theme={mainTheme}>
        <GlobalStyels />
        <Normalize />
        <main>{children}</main>
      </ThemeProvider>
  )
}
