
const SignupForm = () => {
    return (
        <>
            <div className='w-full px-1 py-1 items-start justify-start flex flex-row'>
                <div className='w-1/2 mx-1'>
                    <label htmlFor="firstName" className='self-start'>First Name</label>
                    <input type="text"
                        className=' border-solid border-2 border-black p-2 w-full rounded-md'
                        name='firstName' placeholder='First Name' />
                </div>
                <div className='w-1/2 mx-1 '>
                    <label htmlFor="lastName" className='self-start'>Last Name</label>
                    <input type="text"
                        className=' border-solid border-2 border-black p-2 w-full rounded-md'
                        name='lastName' placeholder='Last Name' />
                </div>
            </div>
        </>
    );
}

export default SignupForm;
