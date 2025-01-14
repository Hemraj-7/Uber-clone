import React from 'react'
import { Link } from 'react-router-dom'
import UserContext, { UserDataContext } from '../context/userContext';

const Home = () => {
    const ans = UserContext(UserDataContext);
    console.log(ans)
    return (
        <div>
            <div className='bg-cover bg-top bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 w-full flex justify-between flex-col'>
                <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <div className='bg-white pb-7 py-4 px-4'>
                    <h2 className='text-[30px] font-bold'>Get Started with Uber</h2>
                    {/* <Link to={'login'} className='flex justify-center items-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link> */}
                    <Link to='/login' className='flex justify-center items-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
                </div>
            </div>
        </div>
    )
}

export default Home
