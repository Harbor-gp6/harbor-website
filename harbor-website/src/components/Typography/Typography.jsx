/* eslint-disable react/prop-types */
export function Typography({ children, color, textPosition }) {
  return (
    <h6 className={`text-xl text-${color || 'white'} max-w-screen-md text-${textPosition || 'center'}`}>
      {children}
    </h6>
  )
}
