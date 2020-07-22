import React from 'react'
import StickBox from 'react-sticky-box'
import List from '~/components/List'
import FollowSuggestion from '~/components/FollowSuggestion'
import News from '~/components/News'

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles'

function SideBar() {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickBox>
        <Body>
          <List
            title="Peoples"
            elements={[<h1>Lorem</h1>, <h1>Lorem</h1>, <h1>Lorem</h1>]}
          />
          <List
            title="Follow"
            elements={[
              <FollowSuggestion name="woods" nickname="@woods" />,
              <FollowSuggestion name="woods" nickname="@woods" />,
              <FollowSuggestion name="woods" nickname="@woods" />,
            ]}
          />
          <List
            title="News"
            elements={[
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
            ]}
          />
        </Body>
      </StickBox>
    </Container>
  )
}

export default SideBar
