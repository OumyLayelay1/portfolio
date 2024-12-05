import React from 'react'

function TextOrange({ name, className }) {
  return (
    <span className={`${className} text-[#FF5C00]`}>
      {name}
    </span>
  )
}

export default TextOrange
