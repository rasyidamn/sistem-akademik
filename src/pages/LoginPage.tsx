import { LoginForm } from '@/components/login-form'
import React from 'react'

function LoginPage() {
  return (
    <div className='min-h-svh w-full flex flex-col justify-center items-center '>
        <div className='w-full max-w-sm'>
            <h1 className='absolute top-30 left-1/2 -translate-x-1/2 text-center text-3xl font-semibold'>Selamat Datang di Web Sistem Akademik</h1>
            <LoginForm />
        </div>
    </div>
  )
}

export default LoginPage