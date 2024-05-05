// eslint-disable-next-line react/prop-types
export function Typography({ children, color, textPosition, textSize, className }) {
  return (
    <p className={`text-${textSize || 'xl'} text-${color || 'white'} max-w-screen-md text-${textPosition || 'center'} ${className}`}>
      {children}
    </p>

  )
}
