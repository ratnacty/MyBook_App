// eslint-disable-next-line no-unused-vars
import React from 'react'
import SubHeader from '../components/SubHeader'
import Footer from '../components/Footer'
import recomend3 from "../assets/recomend3.png"
import recomend1 from "../assets/recomend1.png"
import recomend2 from "../assets/recomend2.png"
import recomend4 from "../assets/recomend4.jpg"


export default function Collection() {
  return (
    <div >

      <div className='w-full mb-20'>

      <SubHeader/>

        <div className="w-8/12 mb-3 mt-5 px-14 py-5 bg-white shadow-xl mx-auto rounded-lg">

            <div className='flex px-8 py-5 gap-4'>
                <img src={recomend3} alt=""  className="w-fit h-60 py-3 pl-3"/>

                <div className="w-full block my-5 px-5 ">
                  <p className='text-violet-800 text-2xl font-serif font-semibold'>Sharelock Homes</p>
                  <p className='text-blue-900 text-md font-serif font-semibold'>Jams Bone</p>
                  <p className='text-blue-900 text-sm font-serif font-semibold'>22 Januari 2016</p>
                  <p className='text-blue-900 text-sm font-serif font-semibold'>Hollywood</p>

                  <div className='text-blue-900 text-normal mt-3 '>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, tenetur
                    <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, esse. hay kiaous 
                    </p>
                  </div>

                  <button className='bg-blue-900 text-white px-3 py-1 mt-3 rounded-lg'>View more</button>
                </div>
            </div>

            <div className='flex px-8 py-5 gap-4'>
                <img src={recomend1} alt=""  className="w-fit h-60 py-3 pl-3"/>

                <div className="w-full block my-5 px-5 ">
                  <p className='text-violet-800 text-2xl font-serif font-semibold'>Sharelock Homes</p>
                  <p className='text-blue-900 text-md font-serif font-semibold'>Jams Bone</p>
                  <p className='text-blue-900 text-sm font-serif font-semibold'>22 Januari 2016</p>
                  <p className='text-blue-900 text-sm font-serif font-semibold'>Hollywood</p>

                  <div className='text-blue-900 text-normal mt-3 '>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, tenetur
                    <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, esse.
                    </p>
                  </div>

                  <button className='bg-blue-900 text-white px-3 py-1 mt-3 rounded-lg'>View more</button>

                </div>
            </div>

            <div className='flex px-8 py-5 gap-4'>
                <img src={recomend2} alt=""  className="w-fit h-60 py-3 pl-3"/>

                <div className="w-full block my-5 px-5 ">
                  <p className='text-violet-800 text-2xl font-serif font-semibold'>Sharelock Homes</p>
                  <p className='text-blue-900 text-md font-serif font-semibold'>Jams Bone</p>
                  <p className='text-blue-900 text-sm font-serif font-semibold'>22 Januari 2016</p>
                  <p className='text-blue-900 text-sm font-serif font-semibold'>Hollywood</p>

                  <div className='text-blue-900 text-normal mt-3 '>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, tenetur
                    <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, esse.
                    </p>
                  </div>

                  <button className='bg-blue-900 text-white px-3 py-1 mt-3 rounded-lg'>View more</button>

                </div>
            </div>

            <div className='flex px-8 py-5 gap-4'>
                <img src={recomend4} alt=""  className="w-fit h-60 py-3 pl-3"/>

                <div className="w-full block my-5 px-5 ">
                  <p className='text-violet-800 text-2xl font-serif font-semibold'>Sharelock Homes</p>
                  <p className='text-blue-900 text-md font-serif font-semibold'>Jams Bone</p>
                  <p className='text-blue-900 text-sm font-serif font-semibold'>22 Januari 2016</p>
                  <p className='text-blue-900 text-sm font-serif font-semibold'>Hollywood</p>

                  <div className='text-blue-900 text-normal mt-3 '>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, tenetur
                    <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, esse. 
                    </p>
                  </div>

                  <button className='bg-blue-900 text-white px-3 py-1 mt-3 rounded-lg'>View more</button>

                </div>
            </div>

        </div>
      </div>

      <Footer/>

    </div>
     
  )
}
