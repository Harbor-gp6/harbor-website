/* eslint-disable react/prop-types */
import clsx from 'clsx'

export function Container ({children, className, maxWidth, padding = 'px-4'}) {
  return (
    <div
      className={clsx(
        'container',
        padding || 'px-4',
        // https://tailwindcss.com/docs/max-width#constraining-to-your-breakpoints
        {
          'max-w-screen-sm': maxWidth === 'sm',
          'max-w-screen-md': maxWidth === 'md',
          'max-w-screen-lg': maxWidth === 'lg',
          'max-w-screen-xl': maxWidth === 'xl',
          'max-w-screen-2xl': maxWidth === '2xl'
        } || 'max-w-screen-xl',
        ...(Array.isArray(className) ? className : [className])
      )}
    >
      {children}
    </div>
  )
}

