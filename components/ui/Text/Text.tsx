import React from 'react'
import clsx from 'clsx'

const Text = ({
  className,
  variant = 'p',
  children
}) => {
  const Component = variant;
  return (
    <Component
      className={clsx(
        className,
        'text-white lexend',
        // VARIANT REGION
        variant === 'h1' && [
          'md:text-[8rem] text-6xl uppercase leading-[3.4rem] md:leading-[6.5rem]'
        ],
        variant === 'h2' && [
          'uppercase text-5xl leading-[3rem]'
        ],
        variant === 'h3' && [
          'md:text-2xl text-lg'
        ],
        variant === 'h4' && [
          // subheading for h1
          'text-xl leading-6'
        ],
        variant === 'p' && [
          'text-sm md:text-[18px]'
        ],
      )}
      
    >
      {children}
    </Component>
  )
}

export default Text