"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const { data: session } = useSession()
    if (session) {
        return <>
            Signed in as {session?.user?.email} <br />
            <button onClick={() => signOut()}>Sign out</button>
        </>
    }
    return (
        <nav className='bg-gray-900 text-white flex justify-between px-4 h-14 items-center'>
            <div className="logo font-bold">
                GetMeaCofee
            </div>
            {/* <ul className='flex justify-between gap-4'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Signup</li>
                <li>Login</li>
            </ul> */}
            <div>
                <Link href={"/login"}>
                    <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2">Login</button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar