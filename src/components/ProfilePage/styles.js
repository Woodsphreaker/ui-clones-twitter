import styled, { css } from 'styled-components'

import { LocationOn, Cake } from '~/styles/icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const Banner = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  height: min(33vw, 199px);
  background-color: var(--twitter);
  position: relative;
`

export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));
  background-color: var(--gray);
  border: 3.75px solid var(--primary);
  border-radius: 50%;
`

export const ProfileData = styled.div``

export const EditButton = styled.div``

const iconsStyled = css`
  width: 20px;
  height: 20px;
  fill: var(--gray);
`

export const LocationIcon = styled(LocationOn)`
  ${iconsStyled}
`

export const CakeIcon = styled(Cake)`
  ${iconsStyled}
`

export const Followage = styled.div``
