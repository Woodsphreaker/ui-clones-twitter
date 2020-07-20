import styled, { css } from 'styled-components'
import { ArrowLeft, Home, Search, Notifications, Email } from '~/styles/icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min(601px, 100%);

  @media (min-width: 501px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: sticky;
  top: 0;
  padding: 8px 0 9px 13px;
  background-color: var(--primary);
  border-bottom: 1px solid var(--outline);
  z-index: 2;

  > button {
    padding: 8px;
    border-radius: 50px;
    outline: 0;
    transition: 0.3s;

    &:hover {
      background-color: var(--twitter-dark-hover);
    }
  }
`

export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;
  fill: var(--twitter);
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 17px;

  > strong {
    font-size: 19px;
  }

  > span {
    font-size: 15px;
    color: var(--gray);
  }
`

export const BottomMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid var(--outline);
  padding: 8px min(46px, max(10vw, 10px));
  transition: opacity 0.3s linear;
  background-color: var(--primary);
  z-index: 2;

  @media screen and (min-width: 501px) {
    opacity: 0;
    pointer-events: none;
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
export const SearchIcon = styled(Search)`
  ${iconsStyles}
`
export const BellIcon = styled(Notifications)`
  ${iconsStyles}
`
export const EmailIcon = styled(Email)`
  ${iconsStyles}
`
