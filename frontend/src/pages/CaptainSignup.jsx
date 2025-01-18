import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainSignup = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const { captain, setCaptain } = React.useContext(CaptainDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle:{
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

    if(response.status === 201){
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
  }

  return (
    <div>
      <div className='p-5 h-screen flex flex-col justify-between'>
        <div>
          <img className='w-20 mb-2' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <h3 className='text-lg font-medium mb-2'>What's our captain name</h3>
            <div className='flex gap-3 mb-6'>
              <input
                required
                className='bg-[#eeeeee] rounded w-1/2 px-4 py-2 border text-lg placeholder:text-base'
                type="text"
                placeholder='First name'
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
              />
              <input
                required
                className='bg-[#eeeeee] rounded w-1/2 px-4 py-2 border text-lg placeholder:text-base'
                type="text"
                placeholder='Last name'
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
              />
            </div>

            <h3 className='text-lg font-medium mb-2'>What's our captain's email</h3>

            <input
              required
              className='bg-[#eeeeee] rounded mb-6 px-4 py-2 border w-full text-lg placeholder:text-base'
              type="email"
              placeholder='email@example.com'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />

            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

            <input
              required
              type="password"
              className='bg-[#eeeeee] rounded mb-6 px-4 py-2 border w-full text-lg placeholder:text-base'
              placeholder='Password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />

            <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
            <div className='flex gap-3'>
              <input
                required
                type="text"
                className='bg-[#eeeeee] w-1/2 rounded mb-6 px-4 py-2 border text-lg placeholder:text-base'
                placeholder='Vehicle Color'
                value={vehicleColor}
                onChange={(e) => {
                  setVehicleColor(e.target.value)
                }}
              />
              <input
                required
                type="text"
                className='bg-[#eeeeee] w-1/2 rounded mb-6 px-4 py-2 border text-lg placeholder:text-base'
                placeholder='Vehicle No. Plate'
                value={vehiclePlate}
                onChange={(e) => {
                  setVehiclePlate(e.target.value)
                }}
              />
            </div>
            <div className='flex gap-3'>
              <input
                required
                type="number"
                className='bg-[#eeeeee] w-1/2 rounded mb-6 px-4 py-2 border text-lg placeholder:text-base'
                placeholder='Vehicle Capacity'
                value={vehicleCapacity}
                onChange={(e) => {
                  setVehicleCapacity(e.target.value)
                }}
              />
              <select
                required
                className='bg-[#eeeeee] w-1/2 rounded mb-6 px-4 py-2 border text-lg placeholder:text-base'
                value={vehicleType}
                onChange={(e) => {
                  setVehicleType(e.target.value)
                }}
              >
                <option value="" disabled>Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="motorcycle">Motorcycle</option>
              </select>
            </div>

            <button className='bg-[#111] text-white font-semibold rounded mb-3 px-4 py-2 w-full text-lg'>Create Captain account</button>

          </form>
          <p className='text-center mb-20'>Already have a Captain account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
        </div>
        <div>
          <p className='text-[10px] leading-tight mb-2'>
            This site is protected by reCAPTCHA and the <span className='underline'>Google Policy</span> and <span className='underline'>Terms and Service apply</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CaptainSignup
