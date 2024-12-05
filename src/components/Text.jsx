import React from 'react'

function Text({ className, text, children }) {
  return (
    <p className={`${className} font-libre font-[400]`}>
      {text} <span>{children}</span>
    </p>
  )
}

export default Text

