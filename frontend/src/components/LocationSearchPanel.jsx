import React from 'react'

const LocationSearchPanel = () => {
    return (
        <div>
            {/* This is just a sample data */}
            <div className='flex gap-3 border-2 p-3 rounded-xl items-center justify-start mb-2'>
                <h2 className='bg-[#eeeeee] px-3 py-2 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                <h4 className='font-medium'>001, X Road Chameli Bazaar, Sursagar Nagar, Pipar City</h4>
            </div>
            <div className='flex gap-3 border-2 p-3 rounded-xl items-center justify-start mb-2'>
                <h2 className='bg-[#eeeeee] px-3 py-2 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                <h4 className='font-medium'>420, 18c Road, Jumar Market, Jaipur</h4>
            </div>
            <div className='flex gap-3 border-2 p-3 rounded-xl items-center justify-start mb-2'>
                <h2 className='bg-[#eeeeee] px-3 py-2 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                <h4 className='font-medium'>18, Near 69's Pub & Bar, GB Road, Dehli</h4>
            </div>
            <div className='flex gap-3 border-2 p-3 rounded-xl items-center justify-start mb-2'>
                <h2 className='bg-[#eeeeee] px-3 py-2 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                <h4 className='font-medium'>404, Jitendra Jaatu market, Jalamand Road, Jodhpur</h4>
            </div>
            {/* <div className='flex gap-3 border-2 p-3 rounded-xl items-center justify-start mb-2'>
                <h2 className='bg-[#eeeeee] px-3 py-2 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                <h4 className='font-medium'>24B, Near Kapoor's cafe, Sheriyians Coding School, Bhopal</h4>
            </div> */}
        </div>
    )
}

export default LocationSearchPanel
