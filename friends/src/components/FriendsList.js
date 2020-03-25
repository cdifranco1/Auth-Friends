import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../axiosWithAuth'
import { AddFriend } from './AddFriend';


const column = {
  width: '33%',
  textAlign: 'center'
}

const flexContainer = {
  display: 'flex',
  width: '60%',
}

export const FriendsList = (props) => {
  const [friends, setFriends ] = useState([])
  const [isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/friends`)
      .then(res => {
        setIsLoading(false)
        setFriends(res.data)
        console.log(res) 
      })
  }, [])

  return (
    <>
      <AddFriend setFriends={setFriends}/>
      {isLoading ? 
      <h2>Loading....</h2> :
      friends.map(friend => 
        <div style={flexContainer} key={friend.id}>
          <span style={column}>{friend.name}</span>
          <span style={column}>{friend.age}</span>
          <span style={column}>{friend.email}</span>
        </div>
      )}  
    </>
  )
}
