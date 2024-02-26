// eslint-disable-next-line no-unused-vars
import React from 'react'
import book1 from "../assets/book1.jpg"
import book2 from "../assets/book2.png"

export default function Popular() {
  return (
    
      <div className="w-full bg-violet-300 h-86 flex justify-around py-12 rounded-xl">
                  
                  <div className="py-2 block">
                    
                    <p className="text-3xl text-white font-bold font-serif py-2">Popular Book</p>
                    <p className="text-lg text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
                     Quae eligendi maxime sunt animi, perspiciatis assumenda. <br />
                     Quae eligendi maxime sunt animi, perspiciatis assumenda.</p>

                     <button className="py-2 px-2 bg-white text-blue-900 text-sm mt-5 rounded shadow-slate-700 shadow-lg hover:bg-violet-600 hover:text-white">Explore More</button>
                  </div>

                  <div className="flex">
                    <img src={book1} alt="" className="w-42 h-56 shadow-slate-800 shadow-lg" />
                    <img src={book2} alt="" className="w-42 h-56 relative -left-14 shadow-slate-800 shadow-lg "/>
                  </div>
                  
                </div>
    
  )
}
