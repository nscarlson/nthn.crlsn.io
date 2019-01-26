import { string } from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

const Tag = ({ name }) => (
  <span className="tag">
    <Link to={`/tag/${name}`}>{name}</Link>
  </span>
)

Tag.displayName = 'Tag'

Tag.propTypes = {
  name: string,
}

export default Tag
