import { Typography } from '../Typography/Typography'

// eslint-disable-next-line react/prop-types
export default function AdvantageCard({ leftImageSrc, rightImageSrc, title, description }) {
  return (
    <div className='flex gap-2 h-full items-center'>
      {leftImageSrc && (
        <img src={leftImageSrc} className='h-36' />
      )}

      <div className='flex flex-col gap-2'>
        <div className={`w-full flex items-center ${rightImageSrc ? 'justify-end' : 'justify-start'}`}>
          <div className='flex items-center justify-center max-w-20 p-2 border-2 border-gray-300 rounded-xl'>
            <Typography
              color="blueEnd"
              textSize="base"
            >
              {title}
            </Typography>
          </div>
        </div>

        <div className='flex items-center w-full justify-center p-2 border-2 border-gray-300 rounded-xl'>
          <Typography
            color="black"
            textPosition="left"
            textSize="base"
          >
            {description}
          </Typography>
        </div>
      </div>

      {rightImageSrc && (
        <img src={rightImageSrc} className='h-36' />
      )}
    </div>
  )
}
