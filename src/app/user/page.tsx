import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import React from 'react'
import getCurrentUser from '../actions/getCurrentUser';

const UserPage = async () => {

  // const session = await getServerSession(authOptions);
  // console.log('session',session)

  const userData = await getCurrentUser();
  console.log('userData', userData);
  return (
    <div>
      로그인된 유저만 볼 수 있는 페이지입니다.
    </div>
  )
}

export default UserPage;