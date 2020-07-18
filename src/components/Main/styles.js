import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: min(601px, 100%);

  @media (min-width: 500px) {
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

export const BackIcon = styled.div``

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`
