import React from 'react'

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles'

function Tweet() {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        You retweeted
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>{new Date().toLocaleDateString()}</time>
          </Header>

          <Description>Lorem Ipsum dolor</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              20
            </Status>

            <Status>
              <RetweetIcon />
              20
            </Status>

            <Status>
              <LikeIcon />
              20
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  )
}

export default Tweet
