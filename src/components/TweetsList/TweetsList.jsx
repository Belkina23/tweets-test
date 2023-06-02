import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../../redux/operation';

const TweetsList = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.data);
  
    useEffect(() => {
      dispatch(getAllUsers());
    }, [dispatch]);
  
    const [followedUsers, setFollowedUsers] = useState([]);
  
    const handleFollow = (user) => {
      if (followedUsers.includes(user.id)) {
        setFollowedUsers(followedUsers.filter((id) => id !== user.id));
      } else {
        setFollowedUsers([...followedUsers, user.id]);
      }
    };
  
    return (
      <div>
        <h2>User List</h2>
        {users.map((user) => (
          <div key={user.id}>
            <h3>{user.user}</h3>
            <p>Tweets: {user.tweets}</p>
            <p>Followers: {user.followers.toLocaleString() + followedUsers.length}</p>
            <img src={user.avatar} alt="Avatar" />
            <button
              onClick={() => handleFollow(user)}
              style={{
                backgroundColor: followedUsers.includes(user.id) ? 'green' : 'blue',
                color: followedUsers.includes(user.id) ? 'white' : 'black',
              }}
            >
              {followedUsers.includes(user.id) ? 'Following' : 'Follow'}
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default TweetsList;
