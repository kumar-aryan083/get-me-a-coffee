"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
// import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Navbar = () => {
    // const router = useRouter();
    // const [showdropdown, setShowdropdown] = useState(false)
    const { data: session } = useSession()
    return (
        <nav className='bg-gray-900 text-white flex justify-between px-4 h-14 items-center'>
            <Link href={"/"}>
                <div className="flex items-center justify-center logo font-bold">
                    <img src="/coffee.gif" width={25} alt="" />
                    <p className='mx-1'>GetmeaCoffee</p>
                </div>
            </Link>
            {session && <div className='flex justify-center items-center'>
                <ul className='flex mx-4'>
                    <Link href={"/dashboard"}>
                        <li className='mx-2 cursor-pointer'>Dashboard</li>
                    </Link>
                    <Link href={`/${session?.user?.email?.split("@")[0]}`}>
                        <li className='mx-2 cursor-pointer'>Your Page</li>
                    </Link>
                    <Link href={"#"} onClick={() => { signOut() }}>
                        <li className='mx-2 cursor-pointer'>Signout</li>
                    </Link>
                </ul>
            </div>}
            {!session && <Link href={"/login"}>
                <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2">Login</button>
            </Link>}

            {/* <div className='relative'>
                {session && <> <button onClick={() => setShowdropdown(!showdropdown)} onBlur={() => {
                    setTimeout(() => {
                        setShowdropdown(false);
                    }, 100)
                }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white mx-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome, {session?.user?.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>
                    <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"} absolute left-[70px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <Link href={"/dashboard"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                            </li>
                            <li>
                                <Link href={"#"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                            </li>
                            <li>
                                <Link href={"#"} onClick={() => { signOut() }} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                            </li>
                        </ul>
                    </div></>
                }
                {!session && <Link href={"/login"}>
                    <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2">Login</button>
                </Link>}
            </div> */}
        </nav >
    )
}

export default Navbar