/* eslint-disable react/prop-types */
import { clsx } from 'clsx'

export function Input ({value, onChange, name, className, type}) {
  return (
    <input
      value={value}
      onChange={onChange}
      name={name}
      className={clsx(
        'rounded-full',
        'border',
        'border-black',
        ...(Array.isArray(className) ? className : [className])
      )}
      type={type}
    />
  )
}
