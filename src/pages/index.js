import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.color.text}
`

export default function Home() {
  return (
    <Layout>
      <StyledTitle>Hello World</StyledTitle>
      <p></p>
    </Layout>
  )
}
