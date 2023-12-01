import React, { useEffect, useState } from 'react'
import { popUp } from '../Helper'
import { Loading } from './Loading'

export const Logout = () => {
    const [isLoading, setisLoading] = useState(false)
    const handleSubmit = ()=>{
        debugger
        setisLoading(true)
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
        {
            isLoading ? (
                <Loading/>
            ): (
                <div>

                    <h2>Logout</h2>
                    <button onClick={handleSubmit}>Logout</button>
                </div> 
            )
        }
    </div>
  )
}
