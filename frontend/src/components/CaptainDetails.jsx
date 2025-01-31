import React from 'react'

const CaptainDetails = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-between gap-7'>
                <div className='flex justify-between w-full'>
                    <div className=' flex items-center gap-2'>
                        <img className='h-10 w-10 rounded-full object-cover' src="http://images4.fanpop.com/image/photos/16300000/Random-people-random-16382026-600-800.jpg" alt="" />
                        <h4 className='text-lg font-medium'>Jitendra Saini</h4>
                    </div>
                    <div className=''>
                        <h4 className='text-xl font-semibold'>₹2099.30</h4>
                        <p className='text-sm text-gray-600'>Earned</p>
                    </div>
                </div>
                <div className='text-center flex justify-between bg-gray-100 p-3 gap-5 rounded-lg'>
                    <div>
                        <i className="text-3xl mb-2 font-thin ri-time-line"></i>
                        <h5 className='text-lg font-medium'>10.3</h5>
                        <p className='text-sm text-gray-600'>Hours Online</p>
                    </div>
                    <div>
                        <i className="text-3xl mb-2 font-thin ri-speed-up-fill"></i>
                        <h5 className='text-lg font-medium'>10.3</h5>
                        <p className='text-sm text-gray-600'>Hours Online</p>
                    </div>
                    <div>
                        <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
                        <h5 className='text-lg font-medium'>10.3</h5>
                        <p className='text-sm text-gray-600'>Hours Online</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaptainDetails
