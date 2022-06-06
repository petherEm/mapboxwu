import React, {useState} from 'react'

const Header = ({ title }) => {

  


  return (
    <div className="w-screen lg:px-20 md:px-20 lg:py-8 md:py-8 flex justify-between p-8 bg-yellow-500">
        <div className="text-2xl font-bold">{ title }</div>
        
    </div>
  )
}

export default Header