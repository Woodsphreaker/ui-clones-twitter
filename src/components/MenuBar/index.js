import React from 'react'
import Button from '~/components/Button'

import {
  Container,
  TopMenu,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  BottomMenu,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles'

function MenuBar() {
  return (
    <Container>
      <TopMenu>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Twitar</span>
        </Button>
      </TopMenu>

      <BottomMenu>
        <Avatar />

        <ProfileData>
          <strong>Woods</strong>
          <strong>@woods.com</strong>
        </ProfileData>

        <ExitIcon />
      </BottomMenu>
    </Container>
  )
}

export default MenuBar
