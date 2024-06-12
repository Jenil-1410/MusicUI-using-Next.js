'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import useSWR from 'swr';

const fetcher = (...args: [RequestInfo, RequestInit?]) => fetch(...args).then(res => res.json())

const page = () => {

    const { data, error } = useSWR('https://dummyjson.com/users', fetcher)
    console.log(data)

    if(error){
        return <h1>Error fetching courses</h1>
    }

    if(!data){
        return <h1>Loading...</h1>
    }

    // const [users, setUsers] = useState<any>([])

    // console.log("users", users);

    // useEffect(() => {
    //     async function fetchUsers() {
    //         const data = await fetch('https://dummyjson.com/users');
    //         setUsers(await data.json());
    //     }
    //     fetchUsers()
    // }, [])

    return (
        <div className="p-4 w-full h-[100vh]">
            <h1 className="mt-32 md:mt-32 text-center text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                All Courses
            </h1>
            <div className='grid grid-cols-4 text-center gap-2 mt-4'>
                {
                    data?.users?.map((user: { id: number, firstName: string, lastName: string }) =>
                        <Link key={user.id} href={`/courses/${user.id}`}><div className='border border-white py-2 rounded-lg bg-gray-400 text-black'>{user.firstName} {user.lastName}</div></Link>
                    )
                }
            </div>
        </div>
    )
}

export default page