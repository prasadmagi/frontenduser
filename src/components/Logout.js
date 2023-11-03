import React, { useEffect } from 'react'
import { popUp } from '../Helper'

export const Logout = () => {
    const handleSubmit = ()=>{
        debugger

        localStorage.clear("token")

        let token = localStorage.getItem("token")

        if(token === "") {
            popUp({message:"User logout successfully", icons:"success", title:"Success"}).then((event)=>{
                if(event.isConfirmed) {

                }
                return 
            })
        }else {
            
        }
    }


  return (
    <div>
        <h2>Logout</h2>
        <button onClick={handleSubmit}>Logout</button>
    </div>
  )
}
