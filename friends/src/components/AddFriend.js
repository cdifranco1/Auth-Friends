import React from "react";
import { useForm } from '../hooks/useForm'
import { axiosWithAuth } from "../axiosWithAuth";


const initialState = {
  name: '',
  age: '', 
  email: ''
}

export const AddFriend = ({ setFriends }) => {
  const [ newFriend, handleChange, setNewFriend ] = useForm(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
    axiosWithAuth()
      .post(`/api/friends`, {...newFriend, age: parseInt(newFriend.age)})
      .then(res => {
        setFriends(res.data)
        console.log(res)
      })
    setNewFriend(initialState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleChange} placeholder="name"/>
      <input type="text" name="age" onChange={handleChange} placeholder="age"/>
      <input type="text" name="email" onChange={handleChange} placeholder="email"/>
      <button type="submit">Submit</button>
    </form>
  )
}
