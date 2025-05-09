import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import { useLocation } from 'react-router-dom'
import LiveTracking from '../components/LiveTracking'

const CaptainRiding = () => {

  const [finishRidePanel, setFinishRidePanel] = useState(false)
  const finishRidePanelRef = useRef(null)

  const location = useLocation()
  const rideData = location.state?.ride

  useGSAP(function () {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    }
    else {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [finishRidePanel])

  return (
    <div className='h-screen'>
      <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to={'/home'} className='h-10 w-10 rounded-full bg-white flex items-center justify-center'>
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className='h-4/5'>
        {/* <img className='w-full h-full object-cover' src="https://www.hanbit.co.kr/data/editor/20210429161116_qvzgnfvw.gif" alt="" /> */}
        <LiveTracking />
      </div>
      <div className='h-1/5 bg-yellow-400  relative'>
        <h5 onClick={() => {
          setFinishRidePanel(true)
        }} className=' absolute text-center top-2 w-screen'>
          <i className="text-2xl ri-arrow-up-wide-line"></i>
        </h5>
        <div className='p-6 flex items-center justify-between pt-12'>
          <h4 className='text-xl font-semibold'>4 Km away</h4>
          <button onClick={() => {
            setFinishRidePanel(true)
          }} className='p-2 bg-green-600 text-white font-semibold rounded-lg px-10'>Complate Ride</button>
        </div>
      </div>
      <div ref={finishRidePanelRef} className='fixed z-10 bottom-0 translate-y-full bg-white w-full px-3 py-8'>
        <FinishRide
          ride={rideData}
          setFinishRidePanel={setFinishRidePanel}
          
        />
      </div>
    </div>
  )
}

export default CaptainRiding
