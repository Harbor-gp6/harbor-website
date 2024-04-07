/* eslint-disable react/prop-types */
export function Heading ({children}) {
  return (
    <h1 className='text-5xl text-white font-semibold max-w-screen-lg text-center'>
      {children}
    </h1>
  )
}
