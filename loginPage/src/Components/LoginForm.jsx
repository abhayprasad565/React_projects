import React, { useRef, useState } from 'react';
const LoginForm = () => {
    const [passwordVissible, setPasswordVissible] = useState("visibility_off");
    const passwordBox = useRef();
    const passwordVissibility = (e) => {
        e.preventDefault();

        if (passwordVissible == "visibility_off") {
            setPasswordVissible("visibility");
            passwordBox.current.type = "text"
        }
        else {
            setPasswordVissible("visibility_off");
            passwordBox.current.type = "password";
        }
        console.log("clicked");
    }
    return (
        <>
            <div className='w-full mx-2 px-2 py-1 items-start flex flex-col'>
                <label htmlFor="username" className='m-1 px-1'>Email or Phone Number</label>
                <input type="text"
                    className='border-solid border-2 border-black p-2 w-full rounded-md'
                    name='username' placeholder='Email/Phone' />
            </div>
            <div className='w-full mx-2 px-2 py-1 mb-2 items-start flex flex-col'>
                <label htmlFor="username" className='m-1 px-1'>Password</label>
                <input type="password"
                    className=' border-solid border-2 border-black p-2 w-full rounded-md'
                    name='password' placeholder='Password' ref={passwordBox} />
                <span className="material-symbols-outlined cursor-pointer self-end mt-[-32px] px-[10px] focus:outline-none " onClick={passwordVissibility}>
                    {passwordVissible}
                </span>
            </div>
            <div className='w-full mx-2 px-2 py-1 mb-2 items-start flex flex-col'>
                <button className='bg-[#3751fa] p-2 w-full border-solid border-2 border-black rounded text-white font-medium hover:bg-white hover:text-black '>
                    Login
                </button>
            </div>

        </>
    );
}

export default LoginForm;
