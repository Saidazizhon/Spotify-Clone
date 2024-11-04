import React from 'react'
import { CLEINT_ID } from '../hook/useEnv'

function Login() {
    const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLEINT_ID}&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-recently-played`

  return (
    <div className='login-bg  flex items-center justify-center h-[100vh]'>
      <a className='w-[200px] hover:scale-125 duration-300 p-3 rounded-md text-white text-[25px] bg-green-400 font-semibold text-center' href={AUTH_URL}>Login</a>
    </div>
  )
}

export default Login
