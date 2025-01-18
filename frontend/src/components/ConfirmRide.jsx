import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
      <h5 onClick={() => {
        props.setConfirmRidePanelOpen(false)
       }} className=' absolute top-8 right-6'>
        <i className="text-2xl ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>

      <div className='flex flex-col gap-2 justify-between items-center'>
        <img className='h-20' src="https://tse4.mm.bing.net/th?id=OIP.ymjpxr4RPlwbLenCbbpYywHaE7&pid=Api&P=0&h=180" alt="" />
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
        <button onClick={()=>{
          props.setVehicleFound(true)
          props.setConfirmRidePanelOpen(false)
        }} className='w-[90%] mt-5 p-2 bg-green-600 text-white font-semibold rounded-lg'>confirm</button>
      </div>
    </div>
  )
}

export default ConfirmRide
