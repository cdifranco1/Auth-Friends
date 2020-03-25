import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import { useForm } from '../hooks/useForm';


export const LoginForm = (props) => {
  const history = useHistory()

  const [ isLoading, setIsLoading ] = useState(false)
  const [ user, handleChange, setUser ] = useForm({
    username: '',
    password: ''
  })


  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    axios
      .post(`http://localhost:5000/api/login`, user)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        setIsLoading(false)
        history.push('/friends')
      })
      .catch(err => {
        console.log(err)
        setIsLoading(false)
      })
    setUser({
      username: '',
      password: ''
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} name="username" type="text" placeholder="Username" />
      <input onChange={handleChange} name="password" type="password" placeholder="Password" />
      <button type="submit">{(isLoading && 'Loading') || 'Submit'}</button>
    </form>
  )
}