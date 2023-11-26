import React from 'react';
import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    //const [data, setData] = useState("");
    // can also be done via loader in react router dom - check docs 
    // useEffect(() => {
    //     fetch("https://api.github.com/users/abhayprasad565")
    //         .then(res => res.json())
    //         .then(data => {
    //             setData(data)
    //             console.log(data);
    //         });
    // }, [])
    // hook to gt data from api call via loader
    const data = useLoaderData();
    return (
        <>
            <div className="bg-gray-600 flex flex-col items-center py-4">
                <div className="text-center py-1 text-2xl  text-white">Github Public Repo's {data.public_repos}</div>
                <img src={data.avatar_url} alt="Git Picture" width={300} />
            </div>
        </>
    );
}

export default Github;

export const GithubData = async () => {
    const res = await (await fetch("https://api.github.com/users/abhayprasad565")).json();
    return res

}
