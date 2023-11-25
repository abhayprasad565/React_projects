import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  // state variables
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState();

  // use call back is used to optimize the perfomance by memoization
  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*_+?|";
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1))
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);
  // calls the callback function whenever the dependencies are changed
  useEffect(() => { passwordgenerator() }, [length, numberAllowed, charAllowed]);

  // useref hook to reff a variable for change
  // here ref records password input
  const passwordRef = useRef(null);
  // copy pass to clipboard
  // only in react 
  const copyPassToClipBoard = useCallback(() => {
    // add select effect to text
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-3 my-8  text-white bg-gray-600">
        <h4 className='rounded-lg p-2 text-center'>Password Generator</h4>
        <div className="w-full flex justify-start shadow rounded-lg overflow-hidden mx-4 my-2">
          <input type="text"
            className='w-4/5 bg-white rounded-lg text-black px-4 py-2'
            placeholder='Password' ref={passwordRef}
            value={password} readOnly />
          <button type="button" onClick={copyPassToClipBoard} className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg mx-1">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2 mt-2 p-2 mx-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={8} max={25} value={length} className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label>length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllowed} id='numberInput'
              onChange={() => { setnumberAllowed((prev) => !prev) }}
            />
            <label >Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={charAllowed} id='numberInput'
              onChange={() => { setcharAllowed((prev) => !prev) }}
            />
            <label >Special Char</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
