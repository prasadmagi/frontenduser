import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Test = () => {
  const [msg, setmsg] = useState("")
  const apicall = async () => {
    const url = window.REACT_APP_URL
    const result = await axios.get(url)

    let data = result.data
    setmsg(data.message)
    // console.log(data, " api data")
  }

  useEffect(() => {
    debugger
    apicall()
  }, [])
  return (
    <div>
      <h1>Welcome to User Authentication</h1>

      <p>{msg}</p>

    </div>
  )
}
