import React from 'react'

import { Container, Avatar, Info, FollowButton } from './styles'

function FollowSuggestion({ name, nickname }) {
  return (
    <Container>
      <div>
        <Avatar />
        <Info>
          <strong>{name}</strong>
          <strong>{nickname}</strong>
        </Info>
      </div>
      <FollowButton outline>Seguir</FollowButton>
    </Container>
  )
}

export default FollowSuggestion
