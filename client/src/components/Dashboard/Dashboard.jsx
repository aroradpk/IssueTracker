import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
    const isLogin = useSelector(state => state.auth.status)
    console.log(isLogin)


    useEffect(() => {
        if(!isLogin){
            navigate("/login")
        }
        else {
            navigate("/dashboard")
        }

    },[isLogin])

        return (
            <>
            { isLogin && <div>hanji pajji</div>}
            </>
        )


}

export default Dashboard