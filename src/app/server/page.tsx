import Link from 'next/link';
import React from 'react';

const Page = async () => {
    const contacts = await fetchData();
    if(!contacts){
        return <h1>Loading...</h1>
    }
    console.log("A task is going on in server");

    return (
        <div>
            <h1>Users SSR</h1>
            <p>Name: {contacts.name}</p>
            <div className='grid grid-cols-4 text-center gap-2 mt-20'>
                {
                    contacts.data.users.map((user: { id: number, firstName: string, lastName: string }) =>
                        <Link key={user.id} href={`/courses/${user.id}`}><div className='border border-white py-2 rounded-lg bg-gray-400 text-black'>{user.firstName} {user.lastName}</div></Link>
                    )
                }
            </div>
        </div>
    );
};

const fetchData = async () => {
    // Simulate a server-side task
    const data = await (await fetch('https://dummyjson.com/users')).json()
    
    return {
        name: 'Jenil',
        data
    }
};

export default Page;