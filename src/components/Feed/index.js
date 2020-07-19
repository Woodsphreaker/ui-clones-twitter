import React from 'react'
import Tweet from '~/components/Tweet'

import { Container, Tab, Tweets } from './styles'

function Feed() {
  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        <Tweet>123</Tweet>
        <Tweet>123</Tweet>
        <Tweet>123</Tweet>
        <Tweet>123</Tweet>
        <Tweet>123</Tweet>
      </Tweets>
    </Container>
  )
}

export default Feed
