import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Test = () => {
  const [msg , setmsg] = useState("")
    const apicall = async()=>{
        const url = "http://localhost:4000/"
       const result = await axios.get(url) 

       let data = result.data
       setmsg(data.message)
       console.log(data," api data")
    }

    useEffect(()=>{
        debugger
      apicall()
    },[])
  return (
    <div>
        <h1>API testing api </h1>
      
          <p>{msg}</p>
      
    </div>
  )
}
