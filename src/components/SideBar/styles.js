import styled from 'styled-components'
import { Search } from '~/styles/icons'

export const Container = styled.div`
  display: none;

  @media screen and (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: min(399px, 100%);
  }
`

export const SearchWrapper = styled.div`
  padding: 10px 24px;
  width: min(399px, 100%);
  position: fixed;
  top: 0;
  z-index: 2;
  background-color: var(--primary);
  max-height: 57px;
`

export const SearchInput = styled.input`
  width: 100%;
  height: 39px;
  font-size: 14px;
  padding: 0 10px 0 52px;
  border-radius: 19.5px;
  background-color: var(--search);

  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    position: relative;
    top: -33px;
    left: 15px;
    z-index: 1;
    transition: 180ms ease-in-out;
  }

  outline: 0;

  &:focus {
    border: 1px solid var(--twitter);

    ~ svg {
      fill: var(--twitter);
    }
  }
`

export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;
  fill: var(--gray);
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 57px 24px 20px;
  margin-top: 3px;

  position: sticky;
  top: 0;

  > div:nth-child(n + 2) {
    margin-top: 20px;
  }
`