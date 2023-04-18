import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/common/GlobalStyle'
import Footer from 'components/common/Footer'
import Header from './Header'

type TemplateProps = {
  children: ReactNode
  headerTitle: string
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const Template: FunctionComponent<TemplateProps> = function ({
  children,
  headerTitle,
}) {
  return (
    <Container>
      <GlobalStyle />
      <Header titleText={headerTitle} />
      {children}
      <Footer />
    </Container>
  )
}

export default Template
