'use client'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr';

const fetcher = (...args: [RequestInfo, RequestInit?]) => fetch(...args).then(res => res.json())

const page = ({ params } : { params?:any }) => {

    const { data, error } = useSWR(`https://dummyjson.com/users/${params.id}`, fetcher);
    // const [user, setUser] = useState<any>(null);
    
    
    // useEffect(() => {
    //     async function getUserById() {
    //         const data = await fetch(`https://dummyjson.com/users/${params.id}`);
    //         setUser(await data.json());
    //     }
    //     getUserById();
    // },[params.id])

    if(error){
      return <h1>Error fetching user data</h1>
    }

    if (!data) {
        return <h1>Loading...</h1>;
    }

  return (
    <div>
      <div className="mt-32 md:mt-32 text-center text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        <h1>{data?.firstName} Details</h1>
      </div>
      <div className='relative mt-4'>
        <div className='border border-white p-2 rounded-md w-fit absolute left-1/2 -translate-x-1/2'>
          <p className='border-b-2 mb-2 pb-2'>Full name : {data.firstName} {data.lastName}</p>
          <p className='border-b-2 mb-2 pb-2'>Email : {data.email}</p>
          <p className='border-b-2 mb-2 pb-2'>Age : {data.age}</p>
          <p className='border-b-2 mb-2 pb-2'>Gender : {data.gender}</p>
          <p className='border-b-2 mb-2 pb-2'>Contact : {data.phone}</p>
          <p className='flex gap-3 items-center'>Profile : <img src={data.image} /></p>
        </div>
      </div>
    </div>
  )
}

export default page