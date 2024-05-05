/* eslint-disable react/prop-types */
import clsx from 'clsx'

export function FormInput ({
  classname = [],
  name,
  value,
  placeholder,
  disabled,
  onChange,
  onKeyDown,
  onInput,
  type = 'text',
  onBlur
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onInput={onInput}
      name={name}
      value={value}
      disabled={disabled}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      className={clsx(
        'rounded-xl',
        'p-3',
        ...(Array.isArray(classname) ? classname : [classname])
      )}
    />
  )
}
