import { useEffect, useState } from 'react'
import './UserProfile.css'
import axios from 'axios'

const UserProfile = () => {

const [user, setUser] = useState('')
const [email, setEmail] = useState('')

    const verification = () => {
        axios
        .post('http://localhost:8080/verification')
        .then((res)=>{
            setUser(res.data.username)
            setEmail(res.data.email)
        })
        .catch((err)=>{
            console.error(err)
        })
        
    }

    useEffect(()=>{
        verification()
    },[])

    return(
        <div className="UserProfileMainWrapper">
            <div className="UserProfileHeader">
                <div className="UserProfileInfo">{email}</div>
                <div className="UserProfileInfo">Info 2</div>
                <div className="UserProfileInfo">Info 3</div>
                <div className="UserProfileInfo">
                    <div className="UserProfileAvatar"></div>
                    Hello, {user}
                </div>
            </div>
          <div className="UserProfileStats">
            <div className="UserProfileStatsInfo">Statsv1</div>
            <div className="UserProfileStatsInfo">Stats 2</div>
            <div className="UserProfileStatsInfo">Stats 3</div>
          </div>
        </div>
    )
}

export default UserProfile