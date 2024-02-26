// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderHome() {
  return (
    <div className="flex justify-between px-10">
      
                <div>
                    <h1 className="text-2xl font-serif text-blue-900 mt-2">MyBook</h1>
                </div>
                
                <div className="flex gap-10 ">
                <Link to="/all-category" className="text-blue-900 font-semibold mt-2">All Category</Link>
                <Link to="/collection" className="text-blue-900 font-semibold mt-2">Collection</Link>
                <button className="ml-10 px-4 py-2 bg-violet-400 rounded text-white">Login</button>
                </div>
            
    </div>
  )
}
