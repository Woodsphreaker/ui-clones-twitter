import React from 'react'
import Feed from '~/components/Feed'

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles'

function ProfilePage() {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Woods</h1>
        <h2>woods@test.com</h2>

        <p>
          Dev Lorem ipsum at <a href="lorem.com">@Dolor</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido em xx de xxxx de xxxx
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>200</strong>
          </span>
          <span>
            <strong>350</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      {/* <Feed /> */}
    </Container>
  )
}

export default ProfilePage
