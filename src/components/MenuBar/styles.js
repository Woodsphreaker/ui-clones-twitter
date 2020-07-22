import styled, { css } from 'styled-components'
import {
  Home,
  Notifications,
  Email,
  Person,
  FavoriteBorder,
  RocketsetIcon,
} from '~/styles/icons'

export const Container = styled.div`
  display: none;

  @media screen and (min-width: 500px) {
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

  > span {
    display: none;
    margin-left: 19px;
    font-weight: bold;
    font-size: 19px;

    @media screen and (min-width: 1280px) {
      display: inline;
    }
  }

  padding: 8.25px 0;
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
`

const iconsStyles = css`
  width: 31px;
  height: 31px;
  cursor: pointer;
  fill: ${(props) => (props.active ? 'var(--twitter)' : 'var(--gray)')};

  &:hover {
    fill: var(--twitter);
  }
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
