import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5 onClick={() => {
        props.setWaitingForDeriver(false)
      }} className=' absolute flex gap-5 top-8 right-6'>
        <div className=' flex items-center gap-1 p-1 px-2 border-black border-2'>
          <h3 className='text-lg font-semibold'>2</h3>
          <p className='text-lg font-medium'>min</p>
        </div>
        <i className="text-2xl ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className='text-2xl font-semibold mb-12'>Meet at the pickup point</h3>

      <div className='flex items-center justify-between mb-5'>
        <img className='h-16' src="https://tse4.mm.bing.net/th?id=OIP.ymjpxr4RPlwbLenCbbpYywHaE7&pid=Api&P=0&h=180" alt="" />
        <div className='text-right'>
          <h2 className='text-lg font-medium'>Jitsa Gehlot</h2>
          <h4 className='text-xl font-semibold -my-1'>RJ 04 AB 1122</h4>
          <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
        </div>
      </div>

      <div className='flex flex-col gap-2 justify-between items-center'>
        <div className='w-full p-2 mt-4'>
          <div className='flex items-center gap-5 px-2 py-3 border-b-2'>
            <div>
              <i className="text-lg ri-map-pin-3-fill"></i>
            </div>
            <div>
              <h3 className='text-lg font-medium'>561/11-A</h3>
              <p className='text-sm text-gray-600'>Kankariya Talab, Hyderabad</p>
            </div>
          </div>
          <div className='flex items-center gap-5 px-2 py-3 border-b-2'>
            <div>
              <i className="text-lg ri-map-pin-fill"></i>
            </div>
            <div>
              <h3 className='text-lg font-medium'>569/97-C</h3>
              <p className='text-sm text-gray-600'>Jalebi House, Juna Bazar, Hyderabad</p>
            </div>
          </div>
          <div className='flex items-center gap-5 px-2 py-3'>
            <div>
              <i className="text-lg ri-money-rupee-circle-fill"></i>
            </div>
            <div>
              <h3 className='text-lg font-medium'>₹193.20</h3>
              <p className='text-sm text-gray-600'>Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WaitingForDriver
