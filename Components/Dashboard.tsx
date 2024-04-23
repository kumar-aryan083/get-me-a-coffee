"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'

interface formType {
    name: string,
    email: string,
    username: string,
    profile: string,
    cover: string,
    razorpayid: string,
    razorpaysecret: string
}

const Dashboard = () => {
    const router = useRouter();
    const { data: session } = useSession();
    useEffect(() => {
        if (!session) {
            router.push('/login')
        }
    }, [router, session])

    const [form, setForm] = useState<formType>({
        name: "",
        email: "",
        username: "",
        profile: "",
        cover: "",
        razorpayid: "",
        razorpaysecret: ""
    });
    function handleChange(e: ChangeEvent<HTMLInputElement>): void {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    function handleSubmit(e: FormEvent): void {
        e.preventDefault();
        console.log(form);
    }
    return (
        <div className="container mx-auto py-4">
            <h1 className="font-bold text-center text-3xl my-4">
                Welcome to your Dashboard
            </h1>
            <form onSubmit={handleSubmit} className='mx-auto max-w-2xl'>
                {/* input for name  */}
                <div className="my-2 ml-16">
                    <label htmlFor="name" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Name</label>
                    <input value={form.name} onChange={handleChange} type="text" name='name' id='name' className='block w-[80%] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                </div>
                {/* input for email  */}
                <div className="my-2 ml-16">
                    <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Email</label>
                    <input value={form.email} onChange={handleChange} type="text" name='email' id='email' className='block w-[80%] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                </div>
                {/* input for username  */}
                <div className="my-2 ml-16">
                    <label htmlFor="username" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Username</label>
                    <input value={form.username} onChange={handleChange} type="text" name='username' id='username' className='block w-[80%] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                </div>
                {/* input for profile picture  */}
                <div className="my-2 ml-16">
                    <label htmlFor="profile" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Profile picture</label>
                    <input value={form.profile} onChange={handleChange} type="text" name='profile' id='profile' className='block w-[80%] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                </div>
                {/* input for cover picture  */}
                <div className="my-2 ml-16">
                    <label htmlFor="cover" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Cover picture</label>
                    <input value={form.cover} onChange={handleChange} type="text" name='cover' id='cover' className='block w-[80%] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                </div>
                {/* input for razorpay id  */}
                <div className="my-2 ml-16">
                    <label htmlFor="razorpayid" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Razorpay credentials</label>
                    <input value={form.razorpayid} onChange={handleChange} type="text" name='razorpayid' id='razorpayid' className='block w-[80%] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                </div>
                {/* input for razorpay secret  */}
                <div className="my-2 ml-16">
                    <label htmlFor="razorpaysecret" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Razorpay secret</label>
                    <input value={form.razorpaysecret} onChange={handleChange} type="text" name='razorpaysecret' id='razorpaysecret' className='block w-[80%] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                </div>
                {/* submit button  */}
                <div className="my-6">
                    <button type='submit' className='block w-[72%] ml-16 p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-b focus:ring-4 focus:outline-none dark:focus:ring-blue-800 font-medium text-sm'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default Dashboard