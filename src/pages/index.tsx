import React, { FunctionComponent } from 'react'
import GlobalStyle from 'components/common/GlobalStyle'
import styled from '@emotion/styled'
import Introduction from '../components/main/Introduction'
import Footer from 'components/common/Footer'
import CategoryList from 'components/main/CategoryList'
import PostList from 'components/main/PostList'

const CATEGORY_LIST = {
  All: 5,
  Android: 3,
  Kotlin: 2,
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <CategoryList selectedCategory="Android" categoryList={CATEGORY_LIST} />
      <PostList />
      <Footer />
    </Container>
  )
}

export default IndexPage
