// eslint-disable-next-line react/prop-types
export function Typography({ children, color, textPosition, textSize }) {
  return (
    <p className={`text-${textSize || 'xl'} text-${color || 'white'} max-w-screen-md text-${textPosition || 'center'}`}>
      {children}
    </p>

  )
}
