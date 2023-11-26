import React from 'react';
import { useParams } from 'react-router-dom'
const User = () => {
    // access passsed parameter from passed url
    const { userId } = useParams();
    return (
        <>
            <h1 className="bg-gray-600 w-full p-4  text-3xl text-white text-center">Welcome {userId} </h1>
        </>
    );
}

export default User;
