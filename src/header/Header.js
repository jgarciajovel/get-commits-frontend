import React from 'react'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 flex flex-row p-6 border-b bg-white bg-opacity-80 backdrop-blur backdrop-filter'>
        <div className='w-full max-w-screen-xl relative mx-auto px-6'>
            <h1 className='text-1xl text-gray-800 font-medium'>Fulltime Force • Take-Home Test</h1>
        </div>
    </header>
  )
}

export default Header