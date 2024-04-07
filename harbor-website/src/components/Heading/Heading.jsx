/* eslint-disable react/prop-types */
export function Heading ({children, color}) {
  return (
    <h1 className={`text-5xl text-${color || 'white'} font-semibold max-w-screen-lg text-center`}>
      {children}
    </h1>
  )
}
