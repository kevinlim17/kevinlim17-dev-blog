import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/common/GlobalStyle'
import Footer from 'components/common/Footer'
import Header from './Header'
import { Helmet } from 'react-helmet'

type TemplateProps = {
  title?: string
  description?: string
  url?: string
  image?: string
  children: ReactNode
  headerTitle: string
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Template: FunctionComponent<TemplateProps> = function ({
  title,
  description,
  url,
  image,
  children,
  headerTitle,
}) {
  return (
    <Container>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@kevin_lsh17" />
        <meta name="twitter:creator" content="@kevin_lsh17" />

        <html lang="ko" />

        <meta
          name="naver-site-verification"
          content="b71740da11dd5bdbb02d9e60347d796810f7ab6c"
        />
      </Helmet>
      <GlobalStyle />
      <Header titleText={headerTitle} />
      {children}
      <Footer />
    </Container>
  )
}

export default Template
