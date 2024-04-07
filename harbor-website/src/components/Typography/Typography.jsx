/* eslint-disable react/prop-types */
export function Typography({ children, color }) {
  return (
    <h6 className={`text-xl text-${color || 'white'} max-w-screen-md text-center`}>
      {children}
    </h6>
  )
}
