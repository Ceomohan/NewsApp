import React from 'react'
import Banner from './Banner'
import BannerNews from '../pages/Breaking/BreakingNews'

const NavBar = () => {

    

    return (
        <div className="">
        <nav className='bg-blue-600 w-full object-contain '>
          <h1 className="text-3xl text-white hover:text-blue-500 font-bold font-mono ">Trendy News</h1>
          <div>
            <input
              className="px-4 py-2 rounded-md "
              type="text"
              placeholder="Search News"
              
            />
            <button className="mx-2 rounded-xl hover:text-white text-lg">Search</button>
          </div>
        </nav>

        {/* This is for Banner 
        <div className=" h-80 mt-16">
          <Banner />
        </div>
        */}
        
        
      </div>
    )
}

export default NavBar