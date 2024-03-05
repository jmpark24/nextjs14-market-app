import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavItem = ({mobile} : {mobile?: boolean}) => {
  const {data: session, status} = useSession();
  console.log({session, status});
 
  return (
    <ul className={`text-md justify-center flex gap-4 w-full items-center ${mobile && "flex-col h-full"}`}>
      <li className='py-2 text-center border-b-4 cursor-pointor'><Link href="/admin">Admin</Link></li>
      <li className='py-2 text-center border-b-4 cursor-pointor'><Link href="/user">User</Link></li>
      {session?.user 
      ? <li className='py-2 text-center border-b-4 cursor-pointor'><button onClick={() => signOut()}>Signout</button></li> 
      : <li className='py-2 text-center border-b-4 cursor-pointor'><button onClick={() => signIn()}>Signin</button></li>}
      
      
    </ul>
  )
}

export default NavItem