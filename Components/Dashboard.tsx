"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Dashboard = () => {
    const router = useRouter();
    const { data: session } = useSession();
    if (!session) {
        router.push('/login')
    }
    return (
        <div>Dashboard Page component</div>
    )
}

export default Dashboard