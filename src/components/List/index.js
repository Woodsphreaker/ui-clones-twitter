import React from 'react'
import PropTypes from 'prop-types'

import { Container, Item, Title } from './styles'

function List({ title, elements = [] }) {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>

      {elements.map((element) => (
        <Item>{element}</Item>
      ))}
    </Container>
  )
}

export default List

List.propTypes = {
  title: PropTypes.string,
  elements: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

List.defaultProps = {
  title: 'Hello',
}
