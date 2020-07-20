import React, { useState } from 'react'

import ProfilePage from '~/components/ProfilePage'
import Feed from '~/components/Feed'

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles'

function Main() {
  const [iconSelected, setIconSelected] = useState('')

  const handleBottomMenu = (event) => {
    const name = event.currentTarget.getAttribute('name')
    setIconSelected(name)
  }

  return (
    <Container>
      <Header>
        <button type="button">
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Woods</strong>
          <span>520 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <Feed />

      <BottomMenu>
        <HomeIcon
          name="home"
          onClick={handleBottomMenu}
          active={iconSelected === 'home'}
        />
        <SearchIcon
          name="search"
          onClick={handleBottomMenu}
          active={iconSelected === 'search'}
        />
        <BellIcon
          name="bell"
          onClick={handleBottomMenu}
          active={iconSelected === 'bell'}
        />
        <EmailIcon
          name="email"
          onClick={handleBottomMenu}
          active={iconSelected === 'email'}
        />
      </BottomMenu>
    </Container>
  )
}

export default Main
