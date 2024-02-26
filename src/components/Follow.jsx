// eslint-disable-next-line no-unused-vars
import React from 'react'
import books from "../assets/books-us.png"


export default function Follow() {
  return (
    <div className="w-full text-blue-900 text-normal font-serif flex justify-between px-12 py-10 mt-10 bg-white shadow-md rounded-lg">
      
                    <div>
                      <p className="text-2xl mb-3">Follow MyBook in</p>
                      <p>MyBook_Instagram</p>
                      <p>MyBook_Twitter</p>
                      <p>Facebook_mybook</p>
                    </div>

                    <div>
                      <img src={books} alt="" className="h-20" />
                    </div>

                    <div>
                      <p className="text-2xl mb-3">More About Us </p>
                      <p>ratnasetyaningrum/linkedin</p>
                      <p>putri/linkedin</p>
                      <p>Mybook_repository</p>
                      
                    </div>
                
    </div>
  )
}
