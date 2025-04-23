import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FinishRide = (props) => {

    const navigate = useNavigate()
    async function endRide() {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`, {
            rideId: props.ride._id
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            props.setFinishRidePanel(false)
            navigate('/captain-home')
        }
    }

    return (
        <div>
            <h5 onClick={() => {
                props.setFinishRidePanel(false)
            }} className=' absolute top-8 right-6'>
                <i className="text-2xl ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-5'>Finish this Ride</h3>
            <div className='flex justify-between items-center p-4 border-2 border-yellow-400 rounded-lg'>
                <div className='flex items-center gap-2'>
                    <img className='h-12 w-12 rounded-full object-cover' src="https://www.stylecraze.com/wp-content/uploads/2013/10/Most-Beautiful-Indian-Girls_1200px.jpg.webp" alt="" />
                    <h2 className='text-lg font-medium'>{props.ride?.user.fullname.firstname}</h2>
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
                <div>
                    <div className='w-screen flex flex-col items-center px-3 mt-5'>
                        <button
                            onClick={endRide}
                            className='p-3 m-3 text-lg text-center px-12 w-full bg-green-600 text-white font-semibold rounded-lg'>Finish Ride
                        </button>
                        <p className='mt-5 text-xs text-gray-600'>click on the finish ride if you have complated the payment</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinishRide
