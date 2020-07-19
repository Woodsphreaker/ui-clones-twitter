import styled from 'styled-components'

export default styled.button`
  background-color: ${(props) =>
    props.outlined ? 'transparent' : 'var(--twitter)'};
  color: ${(props) => (props.outlined ? 'var(--twitter)' : 'var(--white)')};
  border: ${(props) => (props.outlined ? '1px solid var(--twitter)' : 'none')};
  padding: 16px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 15px;
  outline: 0;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.outlined
        ? 'var(--twitter-dark-hover)'
        : 'var(--twitter-light-hover)'};
  }
`
