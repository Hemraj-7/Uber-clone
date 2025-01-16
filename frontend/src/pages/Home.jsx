import React, { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
  const [pickUp, setPickUp] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)

  const submitHandler = () => {
    e.preventDefault()
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        paddingLeft: '0.80rem',
        paddingRight: '0.80rem'
        // opacity: 1
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
      gsap.to(panelCloseRef.current.parentElement, {
        borderRadius: 0
      })
    }
    else {
      gsap.to(panelRef.current, {
        height: '0',
        padding: 0
        // opacity: 0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
      gsap.to(panelCloseRef.current.parentElement, {
        borderTopLeftRadius: '0.75rem',
        borderTopRightRadius: '0.75rem'
      })
    }
  }, [panelOpen])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Logo Piture" />
      <div className='w-screen h-screen'>
        {/* temparary image */}
        <img className='w-full h-full object-cover' src="https://www.hanbit.co.kr/data/editor/20210429161116_qvzgnfvw.gif" alt="" />
      </div>
      <div className='absolute flex flex-col justify-end h-screen top-0 w-full'>
        <div className='bg-white h-[30%] p-6 rounded-t-xl relative'>
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false)
            }}
            className='absolute right-6 top-6 text-2xl opacity-0'
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className='line absolute h-16 w-1 top-[46.6%] left-10 bg-gray-700 rounded-full'></div>
            <input
              onClick={() => {
                setPanelOpen(true)
              }}
              value={pickUp}
              onChange={(e) => {
                setPickUp(e.target.value)
              }}
              className='bg-[#eeeeee] px-10 py-2 text-lg rounded-lg w-full mt-5'
              type="text"
              placeholder='Add a pick-up location'
            />
            <input
              onClick={() => {
                setPanelOpen(true)
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value)
              }}
              className='bg-[#eeeeee] px-10 py-2 text-lg rounded-lg w-full mt-3'
              type="text"
              placeholder='Enter your destination'
            />
          </form>
        </div>
        <div ref={panelRef} className='bg-white h-0'>
          <LocationSearchPanel />
        </div>
      </div>
      <div className='fixed z-10 bottom-0 translate-y-full bg-white w-full px-3 py-8'>
        <h3 className='text-2xl font-semibold mb-5'>Choose a vehicle</h3>
        <div className='flex items-center gap-2 w-full p-3 border-2 active:border-black rounded-xl mb-2'>
          <img className='h-12' src="https://tse4.mm.bing.net/th?id=OIP.ymjpxr4RPlwbLenCbbpYywHaE7&pid=Api&P=0&h=180" alt="" />
          <div className='w-1/2'>
            <h4 className='font-medium text-lg flex items-center gap-1'>UberGo <span className='font-medium text-sm'><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold w-1/4 text-right'>₹193.20</h2>
        </div>
        <div className='flex items-center gap-2 w-full p-3 border-2 active:border-black rounded-xl mb-2'>
          <img className='h-12' src="https://tse4.mm.bing.net/th?id=OIP.znY96OhfmQ9RecEw45FS_AHaE7&pid=Api&P=0&h=180" alt="" />
          <div className='w-1/2'>
            <h4 className='font-medium text-lg flex items-center gap-1'>Moto <span className='font-medium text-sm'><i className="ri-user-3-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, motorcycle rides</p>
          </div>
          <h2 className='text-lg font-semibold w-1/4 text-right'>₹65.30</h2>
        </div>
        <div className='flex items-center gap-2 w-full p-3 border-2 active:border-black rounded-xl mb-2'>
          <img className='h-12' src="https://tse4.mm.bing.net/th?id=OIP.gERohywpalGF3NjolmHt5wHaE7&pid=Api&P=0&h=180" alt="" />
          <div className='w-1/2'>
            <h4 className='font-medium text-lg flex items-center gap-1'>UberAuto <span className='font-medium text-sm'><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>4 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, auto rides</p>
          </div>
          <h2 className='text-lg font-semibold w-1/4 text-right'>₹118.86</h2>
        </div>
      </div>
    </div>
  )
}

export default Home
