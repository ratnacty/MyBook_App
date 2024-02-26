// eslint-disable-next-line no-unused-vars
import React from 'react'
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'

export default function SubHeader() {
  return (
    <div>
      <div className='w-11/12 py-12 mx-auto text-center'>
            <div className='flex flex-row gap-4'>
                <Link to="/" type='button' className='basis-1/3 h-14 '>
                    <IoChevronBackCircleSharp className='fill-violet-300 text-white w-14 h-12 ' />
                </Link>

                <h1 className='mb-5 text-3xl text-blue-900 font-serif basis-1/3'>My Book Explorer</h1>

            </div>

            <div>
                <form action="">
                    <input type="search" className='w-6/12 h-10 bg-slate-200 text-blue-900 px-4 py-1 rounded-2xl outline-none font-semibold' placeholder='search here..'/>
                </form>

            </div>
        </div>
    </div>
  )
}
