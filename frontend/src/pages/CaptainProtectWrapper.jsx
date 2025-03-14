import React, { useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const CaptainProtectWrapper = ({
    children
}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [isLoading, setIsLoading] = useState(true)

    // useEffect(() => {
    //     if (!token) {
    //         navigate('/captain-login')
    //     }

    //     axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     }).then(response => {
    //         if (response.status === 200) {
    //             setCaptain(response.data.captain)
    //             setIsLoading(false)
    //         }
    //     }).catch(err => {
    //         console.log(err);
    //         localStorage.removeItem('token')
    //         navigate('/captain-login')
    //     })
    // }, [token])

    useEffect(() => {
        if (!token) {
            console.error("No token found in localStorage");
            navigate('/captain-login');
            return;
        }

        const fetchCaptainData = async () => {
            try {
                console.log("Fetching captain data..."); 
        
                const response = await axios.get(
                    `${import.meta.env.VITE_BASE_URL}/captains/profile`,
                    { headers: { Authorization: `Bearer ${token}` } }
                );
        
                // console.log("API Response:", response); // Check full response object
                // console.log("API Response Data:", response.data); // Check if response.data exists
        
                if (response.status === 200 && response.data) {
                    // console.log("Setting Captain:", response.data);
                    setCaptain(response.data);  // Make sure response.data exists before setting state
                } else {
                    console.warn("Captain data is missing from response.");
                }
            } catch (err) {
                console.error('Error fetching captain data:', err);
                if (err.response && err.response.status === 401) {
                    console.warn("Token is invalid or expired. Logging out...");
                    localStorage.removeItem('token');
                    navigate('/captain-login');
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchCaptainData();
    }, [setCaptain, navigate]); // No need to include `token` in dependencies

    if (isLoading) {
        <div>Loading...</div>
    }

    return (
        <>
            {children}
        </>
    )
}

export default CaptainProtectWrapper
