import React from 'react'

const VehiclePanel = (props) => {    
    return (
        <div>
            <h5 onClick={() => { props.setVehiclePanelOpen(false) }} className=' absolute top-8 right-6'>
                <i className="text-2xl ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-5'>Choose a vehicle</h3>
            <div
                onClick={() => {
                    props.setConfirmRidePanelOpen(true)
                    props.setVehiclePanelOpen(false)
                    props.selectVehicle('car')
                }}
                className='flex items-center gap-2 w-full p-3 border-2 active:border-black rounded-xl mb-2'>
                <img className='h-12' src="https://tse4.mm.bing.net/th?id=OIP.ymjpxr4RPlwbLenCbbpYywHaE7&pid=Api&P=0&h=180" alt="" />
                <div className='w-1/2'>
                    <h4 className='font-medium text-lg flex items-center gap-1'>UberGo <span className='font-medium text-sm'><i className="ri-user-3-fill"></i>4</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
                </div>
                <h2 className='text-lg font-semibold w-1/4 text-right'>₹{props.setFare.car}</h2>
            </div>
            <div
                onClick={() => {
                    props.setConfirmRidePanelOpen(true)
                    props.setVehiclePanelOpen(false)
                    props.selectVehicle('motorcycle')
                }}
                className='flex items-center gap-2 w-full p-3 border-2 active:border-black rounded-xl mb-2'>
                <img className='h-12' src="https://tse4.mm.bing.net/th?id=OIP.znY96OhfmQ9RecEw45FS_AHaE7&pid=Api&P=0&h=180" alt="" />
                <div className='w-1/2'>
                    <h4 className='font-medium text-lg flex items-center gap-1'>Moto <span className='font-medium text-sm'><i className="ri-user-3-fill"></i>1</span></h4>
                    <h5 className='font-medium text-sm'>3 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, motorcycle rides</p>
                </div>
                <h2 className='text-lg font-semibold w-1/4 text-right'>₹{props.setFare.motorcycle}</h2>
            </div>
            <div
                onClick={() => {
                    props.setConfirmRidePanelOpen(true)
                    props.setVehiclePanelOpen(false)
                    props.selectVehicle('auto')
                }}
                className='flex items-center gap-2 w-full p-3 border-2 active:border-black rounded-xl mb-2'>
                <img className='h-12' src="https://tse4.mm.bing.net/th?id=OIP.gERohywpalGF3NjolmHt5wHaE7&pid=Api&P=0&h=180" alt="" />
                <div className='w-1/2'>
                    <h4 className='font-medium text-lg flex items-center gap-1'>UberAuto <span className='font-medium text-sm'><i className="ri-user-3-fill"></i>3</span></h4>
                    <h5 className='font-medium text-sm'>4 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, auto rides</p>
                </div>
                <h2 className='text-lg font-semibold w-1/4 text-right'>₹{props.setFare.auto}</h2>
            </div>
        </div>
    )
}

export default VehiclePanel
