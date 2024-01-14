import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { popUp } from '../Helper'
import { ToastContainer, toast } from 'react-toastify';
export const Protected = (props) => {
  debugger
  const { Component } = props

  const navigate = useNavigate()
  useEffect(() => {
    let token = localStorage.getItem("token")
    if (!token) {
      toast("Please Login First", { toastId: 'success1', })

      setTimeout(() => {
        navigate("/LoginUser")
      }, 500)

    }
  },)
  return (
    <div>

      <Component />

    </div>
  )
}
