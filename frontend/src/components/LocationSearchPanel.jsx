import React from 'react'

const LocationSearchPanel = (props) => {
    // console.log(props);

    // sample array of location
    const locations = [
        "001, X Road Begam Bazaar, Hyderabad",
        "420, 18c Road, Jumar Market, Jaipur",
        "18, Near 69's Pub & Bar, GBR Road, Dehli",
        "404, Jitendra market, Jalamand Road, Jodhpur",
    ]

    return (
        <div>
            {/* This is just a sample data */}
            {
                locations.map(function (elem, idx) {
                    return <div
                        key={idx}
                        onClick={() => {
                            props.setVehiclePanelOpen(true)
                            props.setPanelOpen(false)
                        }}
                        className='flex gap-3 border-white active:border-black border-2 p-3 rounded-xl items-center justify-start mb-2'>
                        <h2 className='bg-[#eeeeee] px-3 py-2 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
                })
            }
            {/* <div className='flex gap-3 border-white active:border-black border-2 p-3 rounded-xl items-center justify-start mb-2'>
                <h2 className='bg-[#eeeeee] px-3 py-2 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                <h4 className='font-medium'>24B, Near Kapoor's cafe, Sheriyians Coding School, Bhopal</h4>
            </div> */}
        </div>
    )
}

export default LocationSearchPanel
