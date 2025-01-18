import React, { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {
  const [pickUp, setPickUp] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)

  const vehiclePanelRef = useRef(null)
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)

  const confirmRidePanelRef = useRef(null)
  const [confirmRidePanelOpen, setConfirmRidePanelOpen] = useState(false)

  const vehicleFoundRef = useRef(null)
  const [vehicleFound, setVehicleFound] = useState(false)

  const waitingForDriverRef = useRef(null)
  const [waitingForDeriver, setWaitingForDeriver] = useState(true)

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

  useGSAP(function () {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)'
      })
    }
    else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanelOpen])

  useGSAP(function () {
    if (confirmRidePanelOpen) {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    }
    else {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePanelOpen])

  useGSAP(function () {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)'
      })
    }
    else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehicleFound])

  useGSAP(function () {
    if (waitingForDeriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0)'
      })
    }
    else {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [waitingForDeriver])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Logo Piture" />
      <div onClick={() => {
        setVehiclePanelOpen(false)
      }} className='w-screen h-screen'>
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
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed z-10 bottom-0 translate-y-full bg-white w-full px-3 py-8'>
        <VehiclePanel setVehiclePanelOpen={setVehiclePanelOpen} setConfirmRidePanelOpen={setConfirmRidePanelOpen} />
      </div>
      <div ref={confirmRidePanelRef} className='fixed z-10 bottom-0 translate-y-full bg-white w-full px-3 py-8'>
        <ConfirmRide setConfirmRidePanelOpen={setConfirmRidePanelOpen} setVehicleFound={setVehicleFound} />
      </div>
      <div ref={vehicleFoundRef} className='fixed z-10 bottom-0 translate-y-full bg-white w-full px-3 py-8'>
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div ref={waitingForDriverRef} className='fixed z-10 bottom-0 bg-white w-full px-3 py-8'>
        <WaitingForDriver setWaitingForDeriver={setWaitingForDeriver} />
      </div>
    </div>
  )
}

export default Home
