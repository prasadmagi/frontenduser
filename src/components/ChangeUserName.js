import axios from 'axios'
import React, { useState } from 'react'
import { popUp } from '../Helper'

export const ChangeUserName = () => {
    const [oldname, setoldname] = useState("")
    const [newname, setnewname] = useState("")
    const [password, setpassword] = useState("")
    const handleSubmit = (e)=>{
        debugger
        e.preventDefault()
        Apicall()
    }

    const Apicall = async()=>{
        debugger
        let input = {
            oldname: oldname,
            newname:newname,
            password:password
        }
        let url = window.REACT_APP_URL + "changeUserName";
        let response = await axios.post(url, input);
        let result = response.data

        console.log(result,"result");

        if(result.msgId === -1) {

            popUp({message:result.message, icons:"error", title:"Error"}).then((event)=>{
                if(event.isConfirmed) {
    
                }
                return 
            })
        }else{
            popUp({message:result.message, icons:"success", title:"Success"}).then((event)=>{
                if(event.isConfirmed) {
    
                }
                return 
            })
        }
    }
  return (
    <div>
        <h2>Change the User name </h2>
        <input value={oldname} onChange={(e)=>setoldname(e.target.value)} placeholder='Enter Old Name'/>
        <input value={newname} onChange={(e)=>setnewname(e.target.value)} placeholder='Enter New Name'/>
        <input value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Enter Password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
