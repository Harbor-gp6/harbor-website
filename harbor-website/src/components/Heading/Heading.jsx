import clsx from 'clsx'
import React from 'react'
/* eslint-disable react/prop-types */

export function Heading({
  size = 1,
  color = 'white',
  noGutters,
  children,
  component,
  className = []
}) {

  const element = component || `h${size}`

  return (
    React.createElement(
      element,
      {
        className: clsx(
          'font-semibold',
          'font-sans',
          'max-w-screen-lg',
          [color === 'body' && 'text-body'],
          [color === 'primary' && 'text-primary'],
          [color === 'secondary' && 'text-secondary'],
          [color === 'white' && 'text-white'],
          !noGutters && 'pb-4',
          {
            'text-6xl': size === 1,
            'text-5xl': size === 2,
            'text-4xl': size === 3,
            'text-3xl': size === 4,
            'text-2xl': size === 5,
            'text-xl': size === 6
          },
          ...(Array.isArray(className) ? className : [className])
        )
      },
      children
    )
  )
}
