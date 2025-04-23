import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
      <h5 onClick={() => {
        props.setRidePopUpPanel(false)
      }} className=' absolute top-8 right-6'>
        <i className="text-2xl ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className='text-2xl font-semibold mb-5'>New Ride Available!</h3>
      <div className='flex justify-between items-center p-3 bg-yellow-400 rounded-lg'>
        <div className='flex items-center gap-2'>
          <img className='h-12 w-12 rounded-full object-cover' src="https://www.stylecraze.com/wp-content/uploads/2013/10/Most-Beautiful-Indian-Girls_1200px.jpg.webp" alt="" />
          <h2 className='text-lg font-medium'>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h2>
        </div>
        <h5 className='text-lg font-semibold'>2.2 KM</h5>
      </div>
      <div className='flex flex-col gap-2 justify-between items-center'>
        <div className='w-full p-2 mt-4'>
          <div className='flex items-center gap-5 px-2 py-3 border-b-2'>
            <div>
              <i className="text-lg ri-map-pin-3-fill"></i>
            </div>
            <div>
              <h3 className='text-lg font-medium'>561/11-A</h3>
              <p className='text-sm text-gray-600'>{props.ride?.pickup}</p>
            </div>
          </div>
          <div className='flex items-center gap-5 px-2 py-3 border-b-2'>
            <div>
              <i className="text-lg ri-map-pin-fill"></i>
            </div>
            <div>
              <h3 className='text-lg font-medium'>569/97-C</h3>
              <p className='text-sm text-gray-600'>{props.ride?.destination}</p>
            </div>
          </div>
          <div className='flex items-center gap-5 px-2 py-3'>
            <div>
              <i className="text-lg ri-money-rupee-circle-fill"></i>
            </div>
            <div>
              <h3 className='text-lg font-medium'>₹{props.ride?.fare}</h3>
              <p className='text-sm text-gray-600'>Cash Cash</p>
            </div>
          </div>
        </div>
        <div className='px-2 w-full flex items-center justify-between'>
          <button onClick={() => {
            props.setRidePopUpPanel(false)
          }} className='p-2 bg-gray-300 text-gray-700 font-semibold rounded-lg px-10'>Ignore</button>
          <button onClick={() => {
            props.setRidePopUpPanel(false)
            props.setConfirmRidePopUpPanel(true)
            props.confirmRide()
          }} className='p-2 bg-green-600 text-white font-semibold rounded-lg px-10'>Accept</button>
        </div>
      </div>
    </div>
  )
}

export default RidePopUp
