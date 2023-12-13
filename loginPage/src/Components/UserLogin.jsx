import React, { useRef, useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const UserLogin = () => {
    const activeColor = "#a5d8ff";
    const inActiveColor = "#ffff";
    const [isLogin, setIsLogin] = useState(activeColor);
    const [isSignup, setIsSignup] = useState(false);
    const [signupRender, setSignupRender] = useState();
    const loginBtnClick = (e) => {
        setIsSignup(inActiveColor);
        setIsLogin(activeColor)
        setSignupRender(null);

    }
    const signUpBtnClick = () => {
        setIsSignup(activeColor);
        setIsLogin(inActiveColor)
        setSignupRender(<SignupForm />)
    }

    return (
        <div className="flex flex-col items-center justify-start  w-2/5 border-solid border-black border-2 rounded-md bg-white">
            <div className='w-full flex p-2 m-2'>
                <button
                    onClick={loginBtnClick}
                    style={{ backgroundColor: isLogin }}
                    className='hover:bg-[#a5d8ff] p-2 mx-1 w-1/2 hover:border-solid border-2 border-black rounded'>
                    Login
                </button>
                <button
                    onClick={signUpBtnClick}
                    style={{ backgroundColor: isSignup }}
                    className='hover:bg-[#a5d8ff] p-2 mx-1 w-1/2 hover:border-solid border-2 border-black rounded'>
                    Signup
                </button>
            </div>
            {signupRender}
            <LoginForm />


        </div>

    );
}

export default UserLogin;
