import styled, { css } from 'styled-components'
import {
  Home,
  Notifications,
  Email,
  Person,
  FavoriteBorder,
  RocketsetIcon,
  ExitToApp,
} from '~/styles/icons'

export const Container = styled.div`
  display: none;

  @media screen and (min-width: 501px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    padding: 9px 19px 20px;
    max-height: 100vh;
  }
`

export const TopMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1280px) {
    align-items: flex-start;
  }
`

export const Logo = styled(RocketsetIcon)`
  width: 41px;
  height: 41px;

  > path {
    fill: var(--twitter);
  }
`

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  border-radius: 10px;
  transition: 0.3s;

  > span {
    display: none;
    margin-left: 19px;
    font-weight: bold;
    font-size: 19px;

    @media screen and (min-width: 1280px) {
      display: inline;
    }
  }

  padding: 8.25px 10px;
  outline: 0;

  & + button {
    margin-top: 16.5px;
  }

  & + button:last-child {
    margin-top: 30px;
    width: 40px;
    height: 40px;

    > span {
      display: none;
    }

    @media screen and (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }

  &:hover {
    cursor: pointer;
    background-color: var(--twitter-dark-hover);
  }

  &:hover,
  &.active {
    span,
    svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }
`

const iconsStyles = css`
  width: 31px;
  height: 31px;
  cursor: pointer;
  fill: ${(props) => (props.active ? 'var(--twitter)' : 'var(--gray)')};
`

export const HomeIcon = styled(Home)`
  ${iconsStyles}
`

export const BellIcon = styled(Notifications)`
  ${iconsStyles}
`

export const EmailIcon = styled(Email)`
  ${iconsStyles}
`

export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconsStyles}
`

export const ProfileIcon = styled(Person)`
  ${iconsStyles}
`

export const BottomMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

export const Avatar = styled.div`
  width: 39px;
  height: 39px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: var(--gray);
`

export const ProfileData = styled.div`
  display: none;

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
    font-size: 14px;

    > span {
      font-weight: normal;
      color: var(--gray);
    }
  }
`

export const ExitIcon = styled(ExitToApp)`
  display: none;

  @media screen and (min-width: 1280px) {
    display: inline-block;
    width: 25px;
    height: 25px;
    color: var(--white);
    cursor: pointer;
    margin-left: 30px;
  }

  &:hover {
    > path {
      color: var(--like);
    }
  }
`
