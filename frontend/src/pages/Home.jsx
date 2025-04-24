import React, { useState, useRef, useContext, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';
import axios from 'axios'
import { SocketContext } from '../context/SocketContext';
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import LiveTracking from '../components/LiveTracking';

const Home = () => {
  const [pickup, setPickup] = useState('')
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
  const [waitingForDriver, setWaitingForDriver] = useState(false)

  const [pickupSuggestions, setPickupSuggestions] = useState([])
  const [destinationSuggestions, setDestinationSuggestions] = useState([])
  const [activeField, setActiveField] = useState(null)

  const [fare, setFare] = useState({})

  const [vehicleType, setVehicleType] = useState(null)

  const [ride, setRide] = useState(null)

  const navigate = useNavigate()

  const { socket } = useContext(SocketContext)
  const { user } = useContext(UserDataContext)

  useEffect(() => {
    if (socket && user?._id) {
      socket.emit('join', {
        userType: "user",
        userId: user._id
      });
    }
  }, [socket, user?._id]);


  socket.on('ride-confirmed', ride => {
    console.log(ride)
    setVehicleFound(false)
    setWaitingForDriver(true)
    setRide(ride)
  })

  socket.on('ride-started', ride => {
    setWaitingForDriver(false)
    navigate('/riding', { state: { ride } })
  })

  const handlepickupChange = async (e) => {
    setPickup(e.target.value)
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
        params: { input: e.target.value },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      setPickupSuggestions(response.data)
    } catch (err) {
      console.error("Error fetching suggestions:", err);
    }
  }

  const handleDestinationChange = async (e) => {
    setDestination(e.target.value)
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
        params: { input: e.target.value },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      setDestinationSuggestions(response.data)
    } catch (err) {
      // handle error
    }
  }

  const submitHandler = () => {
    e.preventDefault()
  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '63%',
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
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0)'
      })
    }
    else {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [waitingForDriver])

  async function findTrip() {
    setVehiclePanelOpen(true)
    setPanelOpen(false)

    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
      params: { pickup, destination },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    // console.log("API Response:", response.data)
    setFare(response.data);
  }

  async function createRide() {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
      pickup,
      destination,
      vehicleType
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    console.log(response.data)
  }

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 z-10 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Logo Piture" />
      <div onClick={() => {
        setVehiclePanelOpen(false)
      }} className='w-screen h-screen'>
        {/* temparary image */}
        {/* <img className='w-full h-full object-cover' src="https://www.hanbit.co.kr/data/editor/20210429161116_qvzgnfvw.gif" alt="" /> */}
        <LiveTracking />
      </div>
      <div className='absolute flex flex-col justify-end h-screen top-0 w-full'>
        <div className='bg-white h-[37%] p-6 rounded-t-xl relative'>
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
            <div className='line absolute h-16 w-1 top-[38.4%] left-10 bg-gray-700 rounded-full'></div>
            <input
              onClick={() => {
                setPanelOpen(true)
                setActiveField('pickup')
              }}
              value={pickup}
              // onChange={(e) => {
              //   setPickup(e.target.value)
              // }}
              onChange={handlepickupChange}
              className='bg-[#eeeeee] px-10 py-2 text-lg rounded-lg w-full mt-5'
              type="text"
              placeholder='Add a pick-up location'
            />
            <input
              onClick={() => {
                setPanelOpen(true)
                setActiveField('destination')
              }}
              value={destination}
              // onChange={(e) => {
              //   setDestination(e.target.value)
              // }}
              onChange={handleDestinationChange}
              className='bg-[#eeeeee] px-10 py-2 text-lg rounded-lg w-full mt-3'
              type="text"
              placeholder='Enter your destination'
            />
          </form>
          <button
            onClick={findTrip}
            className='bg-black text-white text-xl rounded-lg p-2 my-4 w-full'>
            Find Trip
          </button>
        </div>
        <div ref={panelRef} className='bg-white h-0'>
          <LocationSearchPanel
            suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
            setPanelOpen={setPanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={activeField}
          />
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed z-10 bottom-0 translate-y-full bg-white w-full px-3 py-8'>
        <VehiclePanel
          selectVehicle={setVehicleType}
          setFare={fare}
          setVehiclePanelOpen={setVehiclePanelOpen}
          setConfirmRidePanelOpen={setConfirmRidePanelOpen}
        />
      </div>
      <div ref={confirmRidePanelRef} className='fixed z-10 bottom-0 translate-y-full bg-white w-full px-3 py-8'>
        <ConfirmRide
          createRide={createRide}
          pickup={pickup}
          destination={destination}
          fare={fare}
          vehicleType={vehicleType}
          setConfirmRidePanelOpen={setConfirmRidePanelOpen}
          setVehicleFound={setVehicleFound}
        />
      </div>
      <div ref={vehicleFoundRef} className='fixed z-10 bottom-0 translate-y-full bg-white w-full px-3 py-8'>
        <LookingForDriver
          pickup={pickup}
          destination={destination}
          fare={fare}
          vehicleType={vehicleType}
          setVehicleFound={setVehicleFound}
        />
      </div>
      <div ref={waitingForDriverRef} className='fixed z-10 bottom-0 bg-white w-full px-3 py-8'>
        <WaitingForDriver
          ride={ride}
          setVehicleFound={setVehicleFound}
          setWaitingForDriver={setWaitingForDriver}
        />
      </div>
    </div>
  )
}

export default Home
