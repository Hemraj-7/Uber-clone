import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { SocketContext } from '../context/SocketContext'

const Riding = ( ) => {

    const location = useLocation()
    const { ride } = location.state || {}

    const { socket } = useContext(SocketContext)
    const navigate = useNavigate()


    socket.on('ride-ended', ()=>{
        navigate('/home')
    })

    return (
        <div className='h-screen'>
            <Link to={'/home'} className='fixed h-10 w-10 rounded-full bg-white flex items-center justify-center top-2 right-2'>
            <i className="text-lg font-medium ri-home-5-line"></i>
            </Link>
            <div className='h-1/2'>
                <img className='w-full h-full object-cover' src="https://www.hanbit.co.kr/data/editor/20210429161116_qvzgnfvw.gif" alt="" />
            </div>
            <div className='h-1/2 p-4'>
                <div className='flex items-center justify-between'>
                    <img className='h-16' src="https://tse4.mm.bing.net/th?id=OIP.ymjpxr4RPlwbLenCbbpYywHaE7&pid=Api&P=0&h=180" alt="" />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium'>{ride?.captain.fullname.firstname}</h2>
                        <h4 className='text-xl font-semibold -my-1'>{ride?.captain.vehicle.plate}</h4>
                        <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                    </div>
                </div>

                <div className='flex flex-col gap-2 justify-between items-center'>
                    <div className='w-full p-2 mt-4'>
                        <div className='flex items-center gap-5 px-2 py-3 border-b-2'>
                            <div>
                                <i className="text-lg ri-map-pin-fill"></i>
                            </div>
                            <div>
                                <h3 className='text-lg font-medium'>569/97-C</h3>
                                <p className='text-sm text-gray-600'>{ride?.destination}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 px-2 py-3'>
                            <div>
                                <i className="text-lg ri-money-rupee-circle-fill"></i>
                            </div>
                            <div>
                                <h3 className='text-lg font-medium'>₹{ride?.fare}</h3>
                                <p className='text-sm text-gray-600'>Cash Cash</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='w-full p-2 bg-green-600 text-white font-semibold rounded-lg'>Make a Payment</button>
            </div>
        </div>
    )
}

export default Riding
