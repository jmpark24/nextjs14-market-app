import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import React from 'react'

const UserPage = async () => {

  const session = await getServerSession(authOptions);
  console.log('session',session)
  return (
    <div>
      로그인된 유저만 볼 수 있는 페이지입니다.
    </div>
  )
}

export default UserPage;