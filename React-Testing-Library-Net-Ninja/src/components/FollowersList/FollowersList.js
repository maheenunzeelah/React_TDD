import React, { useEffect, useState } from 'react'
import "./FollowersList.css"
import axios from "axios"
import { Link } from 'react-router-dom';

export default function FollowersList() {

    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        fetchFollowers()
    }, []);

    const fetchFollowers = async () => {
        const res = await axios.get("https://randomuser.me/api/?results=5");
        const {data}=res;
        setFollowers(data?.results)
    }

    return (
        <div className="followerslist-container">
            <h1 data-testid="testing-head">Testingg</h1>
            <div>
                {followers?.map((follower,index) => {
                     console.log(index)
                    return <div className="follower-item"
                     data-testid={`follower-item-${index}`}
                    >
                        <img src={follower.picture.large}/>
                        <div className="followers-details">
                            <div className="follower-item-name">
                                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
                            </div>
                            <p>{follower.login.username}</p>
                        </div>
                    </div>
})}
            </div>
            <div className="todo-footer">
                <Link to="/">Go Back</Link>
            </div>
        </div>
    )
}
