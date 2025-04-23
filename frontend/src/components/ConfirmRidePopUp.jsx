import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {

    const [otp, setOtp] = useState('')
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault()

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
            params: {
                rideId: props.ride._id,
                otp: otp
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            props.setConfirmRidePopUpPanel(false)
            props.setRidePopUpPanel(false)
            navigate('/captain-riding', { state: { ride: props.ride } })
        }
    }

    return (
        <div>
            <h5 onClick={() => {
                props.setConfirmRidePopUpPanel(false)
            }} className=' absolute top-8 right-6'>
                <i className="text-2xl ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm this ride to start</h3>
            <div className='flex justify-between items-center p-3 bg-yellow-400 rounded-lg'>
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
                    <form className='w-screen p-3 flex flex-col gap-5'
                        onSubmit={submitHandler}>
                        <input
                            value={otp}
                            onChange={(e) => {
                                setOtp(e.target.value)
                            }}
                            type="number"
                            placeholder='Enter OTP'
                            className='bg-[#eeeeee] font-mono px-6 py-3 text-lg rounded-lg w-full' />
                        <button className='w-full mt-5 text-lg flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>Confirm</button>
                        <button onClick={() => {
                            props.setConfirmRidePopupPanel(false)
                            props.setRidePopUpPanel(false)

                        }} className='w-full mt-2 bg-red-600 text-lg text-white font-semibold p-3 rounded-lg'>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ConfirmRidePopUp
