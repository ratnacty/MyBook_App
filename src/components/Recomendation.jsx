// eslint-disable-next-line no-unused-vars
import React from 'react'
import recomend1 from "../assets/recomend1.png"
import recomend3 from "../assets/recomend3.png"
import recomend4 from "../assets/recomend4.jpg"
import { FaAnglesRight } from "react-icons/fa6"

export default function Recomendation() {
  return (
    <div>
      <div className="flex">
                    <h1 className="text-2xl font-serif text-blue-900 mb-5 mx-8 my-2">Recomendation  </h1>
                    <div>
                      <FaAnglesRight className="fill-blue-900 mb-5 my-4" />
                    </div>
                </div>
                 

                  <div className="flex justify-around">

                    <div className="bg-violet-100 w-96 h-56 rounded-lg flex ">
                      
                        <img src={recomend1} alt=""  className="w-fit h-38 py-3 pl-3"/>

                        <div className="w-full text-sm text-blue-900 block my-12 bg-slate-100 px-3 py-2 ">
                          <p>Book Title</p>
                          <p>Author</p>
                          <p>Publisher date</p>
                          <p>Publisher</p>
                          <button className="text-sm text-white bg-blue-900 px-4 py-1 rounded-lg ml-32 mt-1">More</button>
                        </div>
                    </div>

                    <div className="bg-violet-100 w-96 h-56 rounded-lg flex ">
                      
                      <img src={recomend4} alt=""  className="w-fit h-38 py-3 pl-3"/>

                      <div className="w-full text-sm text-blue-900 block my-12 bg-slate-100 px-3 py-2 ">
                        <p>Book Title</p>
                        <p>Author</p>
                        <p>Publisher date</p>
                        <p>Publisher</p>
                        <button className="text-sm text-white bg-blue-900 px-4 py-1 rounded-lg ml-32 mt-1">More</button>
                      </div>
                    </div>

                    <div className="bg-violet-100 w-96 h-56 rounded-lg flex mb-3 ">
                      
                      <img src={recomend3} alt=""  className="w-fit h-38 py-3 pl-3"/>

                      <div className="w-full text-sm text-blue-900 block my-12 bg-slate-100 px-3 py-2 ">
                        <p>Book Title</p>
                        <p>Author</p>
                        <p>Publisher date</p>
                        <p>Publisher</p>
                        <button className="text-sm text-white bg-blue-900 px-4 py-1 rounded-lg ml-32 mt-1">More</button>
                      </div>
                    </div>

                  </div>
    </div>
  )
}
