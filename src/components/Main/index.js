import React from 'react'

import { Container, Header, BackIcon, ProfileInfo } from './styles'

function Main() {
  return (
    <Container>
      <Header>
        <button type="button">
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Woods</strong>
          <span>123456</span>
        </ProfileInfo>
      </Header>

      {/* <ProfilePage /> */}

      {/* <BottomMenu>
        <HomeIcon />
        <SeachIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu> */}
    </Container>
  )
}

export default Main
