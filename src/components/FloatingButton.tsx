import Link from 'next/link'
import React from 'react'

interface FloatingButtonProps {
  children: React.ReactNode;
  href: string;
}

const FloatingButton = ({children, href}: FloatingButtonProps) => {
  return (
    <Link 
      href={href}
      className='
        fixed
        flex
        items-center
        justify-center
        border-0
        rounded-full
        botton-5
        right-5
        w-14
        shadow-xl
        cursor-pointer
        aspect-square
        border-transparent
        bg-orange-400
        text-white
        hover:bg-orange-500
        transition-colors
      '>
      {children}
    </Link>
  )
}

export default FloatingButton