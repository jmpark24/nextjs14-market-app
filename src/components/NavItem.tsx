import { User } from '@prisma/client';
import { signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

interface NavItemProps {
  mobile?: boolean;
  currentUser?: User | null;
}

const NavItem = ({mobile, currentUser} : NavItemProps) => {
 
  return (
    <ul className={`text-md justify-center flex gap-4 w-full items-center ${mobile && "flex-col h-full"}`}>
      <li className='py-2 text-center border-b-4 cursor-pointor'><Link href="/admin">Admin</Link></li>
      <li className='py-2 text-center border-b-4 cursor-pointor'><Link href="/user">User</Link></li>
      {currentUser
      ? <li className='py-2 text-center border-b-4 cursor-pointor'><button onClick={() => signOut()}>Signout</button></li> 
      : <li className='py-2 text-center border-b-4 cursor-pointor'><button onClick={() => signIn()}>Signin</button></li>}
    </ul>
  )
}

export default NavItem