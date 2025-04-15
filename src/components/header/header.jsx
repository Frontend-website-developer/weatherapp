import React, { useState } from 'react'


function Header({onSubmitCity}) {

  const[inputCity, setInputCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputCity.trim()){
      onSubmitCity(inputCity);
      setInputCity("");
    }

  }

  return (
    <div className='container mx-auto'>
        <h1 className='text-center py-5 font-bold text-white'>Weather APP</h1>
        <form className="flex justify-center py-10" onSubmit={handleSubmit} action="">
            <input type="text" value={inputCity} onChange={(e) => setInputCity(e.target.value)}
        placeholder="Enter city" className='block w-1/2 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 mr-5' />
            <input type="submit" value="SUBMIT" className='bg-gray-900 px-5 py-2 rounded font-semibold text-white'/>
        </form>
    </div>
  )
}

export default Header