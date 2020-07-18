import React from 'react'

import Main from '~/components/Main'
import { Container, Wrapper } from './styles'

function Layout() {
  return (
    <>
      <Container>
        <Wrapper>
          {/* <MenuBar /> */}
          <Main />
          {/* <SideBar /> */}
        </Wrapper>
      </Container>
    </>
  )
}

export default Layout
