import React from 'react'
import { Link } from 'react-router-dom'

const CaptainHome = () => {
  return (
    <div className='h-screen'>
      <div className='fixed p-3 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to={'/home'} className='h-10 w-10 rounded-full bg-white flex items-center justify-center'>
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className='h-1/2'>
        <img className='w-full h-full object-cover' src="https://www.hanbit.co.kr/data/editor/20210429161116_qvzgnfvw.gif" alt="" />
      </div>
      <div className='h-1/2 p-4 w-screen'>
        <div className='flex flex-col items-center justify-between gap-7'>
          <div className='flex justify-between w-full'>
            <div className=' flex items-center'>
              <img className='h-10 w-10 rounded-full object-cover' src="http://images4.fanpop.com/image/photos/16300000/Random-people-random-16382026-600-800.jpg" alt="" />
              <h4 className='text-lg font-medium'>Jitendra Saini</h4>
            </div>
            <div className=''>
              <h4 className='text-xl font-semibold'>₹2099.30</h4>
              <p className='text-sm text-gray-600'>Earned</p>
            </div>
          </div>
          <div className='text-center flex justify-between'>
            <div>
              <i className="text-3xl mb-2 font-thin ri-time-line"></i>
              <h5 className='text-lg font-medium'>10.3</h5>
              <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
            <div>
              <i className="text-3xl mb-2 font-thin ri-speed-up-fill"></i>
              <h5 className='text-lg font-medium'>10.3</h5>
              <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
            <div>
              <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
              <h5 className='text-lg font-medium'>10.3</h5>
              <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaptainHome
