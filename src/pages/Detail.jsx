// eslint-disable-next-line no-unused-vars
import React from 'react'
import SubHeader from '../components/SubHeader'
import Footer from '../components/Footer'
import recomend3 from "../assets/recomend3.png"


export default function Detail() {
  return (
    <div>
      <div className='w-full mb-20'>

        <SubHeader/>

        <div className='w-8/12 mb-3  bg-white shadow-xl rounded-lg :  mt-5 px-14 py-5 mx-auto'>
                <div className='flex px-8 py-5 gap-4'>
                    <img src={recomend3} alt=""  className="w-fit h-60 py-3 pl-3"/>

                    <div className="w-full block my-10 px-5 ">
                    <p className='text-violet-800 text-2xl font-serif font-semibold'>Sharelock Homes</p>
                    <p className='text-blue-900 text-md font-serif font-semibold'>Jams Bone</p>
                    <p className='text-blue-900 text-sm font-serif font-semibold'>22 Januari 2016</p>
                    <p className='text-blue-900 text-sm font-serif font-semibold'>Hollywood</p>

                    <button className='bg-blue-900 text-white px-3 py-1 mt-5 rounded-lg'>Read more</button>
                    </div>
                </div>

                <div className='px-8 py-5 mt-5'>
                    <p className='text-xl text-violet-600 mb-5'>Sinopsis</p>

                    <div className='text-normal text-blue-900'>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia non quia illum voluptatum dicta, nesciunt porro nihil praesentium, saepe ipsa aspernatur possimus? Aperiam consequatur ipsam, alias excepturi dicta id! A.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos et asperiores soluta iste laboriosam minus incidunt impedit ex nesciunt, dolore, eius alias natus quia esse. Impedit alias quo sint ducimus.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam maxime labore similique, minima, dolores velit architecto nostrum autem, eligendi nobis dolorem porro amet. Quo illo, molestiae optio quam nihil cupiditate?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eum, consequatur sunt perferendis, sint veritatis provident et nihil culpa ea laboriosam vitae reprehenderit molestiae facilis architecto in harum numquam ipsum!</p>
                    
                    </div>
                </div>

        </div>

      </div>

    <Footer/>

    </div>
  )
}
