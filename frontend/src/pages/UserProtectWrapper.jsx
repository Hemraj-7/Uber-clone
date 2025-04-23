// import React, { useContext, useEffect, useState } from 'react'
// import { UserDataContext } from '../context/UserContext'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'

// const UserProtectWrapper = ({
//     children
// }) => {
//     const token = localStorage.getItem('token')
//     const navigate = useNavigate()
//     const {user, setUser} = useContext(UserDataContext)
//     const [isLoading, setIsLoading] = useState(true)

//     useEffect(() => {
//         if (!token) {
//             navigate('/login')
//         }
//      }, [token])

//      axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
//         headers:{
//             Authorization: `Bearer ${token}`
//         }
//      }).then(response=>{
//         if(response.status === 200 ){
//             setUser(response.data)
//             setIsLoading(false)
//         }
//      }).catch(err=>{
//         console.log(err);
//         localStorage.removeItem('token')
//         navigate('/login')
//      })

//      if(isLoading){
//         <div>Loading...</div>
//      }

//     return (
//         <>
//             {children}
//         </>
//     )
// }

// export default UserProtectWrapper
import React, { useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserDataContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!token) {
            navigate('/login')
            return
        }

        // Fetch user profile
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                if (response.status === 200) {
                    setUser(response.data)
                }
            } catch (err) {
                console.error("Error fetching profile:", err)
                localStorage.removeItem('token')
                navigate('/login')
            } finally {
                setIsLoading(false)
            }
        }

        fetchUserProfile()
    }, [token, navigate, setUser]) // Added dependencies to avoid stale closures

    if (isLoading) {
        return <div>Loading...</div>
    }

    return <>{children}</>
}

export default UserProtectWrapper
