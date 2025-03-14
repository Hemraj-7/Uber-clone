import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
      <h5 onClick={() => { 
        props.setVehicleFound(false)
       }} className=' absolute top-8 right-6'>
        <i className="text-2xl ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className='text-2xl font-semibold mb-5'>Looking for a Driver</h3>

      <div className='flex flex-col gap-2 justify-between items-center'>
        <img className='h-20' src="https://tse4.mm.bing.net/th?id=OIP.ymjpxr4RPlwbLenCbbpYywHaE7&pid=Api&P=0&h=180" alt="" />
        <div className='w-full p-2 mt-4'>
          <div className='flex items-center gap-5 px-2 py-3 border-b-2'>
            <div>
              <i className="text-lg ri-map-pin-3-fill"></i>
            </div>
            <div>
              <h3 className='text-lg font-medium'>561/11-A</h3>
              <p className='text-sm text-gray-600'>{props.pickup}</p>
            </div>
          </div>
          <div className='flex items-center gap-5 px-2 py-3 border-b-2'>
            <div>
              <i className="text-lg ri-map-pin-fill"></i>
            </div>
            <div>
              <h3 className='text-lg font-medium'>569/97-C</h3>
              <p className='text-sm text-gray-600'>{props.destination}</p>
            </div>
          </div>
          <div className='flex items-center gap-5 px-2 py-3'>
            <div>
              <i className="text-lg ri-money-rupee-circle-fill"></i>
            </div>
            <div>
              <h3 className='text-lg font-medium'>₹{props.fare[props.vehicleType]}</h3>
              <p className='text-sm text-gray-600'>Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LookingForDriver
