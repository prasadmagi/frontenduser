import axios from 'axios'
import React, { useState } from 'react'
import { popUp } from '../Helper'

export const DeleteUser = () => {
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")
    const [isLoading, setisLoading] = useState(false)

    const handleSubmit = async (e) => {
        debugger
        e.preventDefault()
        setisLoading(true)
        //api call
        let url = window.REACT_APP_URL + "deleteUser";
        let input = {
            name: name,
            password: password,
        };
        let response = await axios.post(url, input);

        let result = await response.data;
        setisLoading(false)
        console.log(result, "deleteUser");

        if (result.msgId === -1) {
            popUp({ message: result.message, icons: "error", title: "Error" }).then((event) => {
                if (event.isConfirmed) {

                }
                return
            })
        } else {
            popUp({ message: result.message, icons: "success", title: "Success" }).then((event) => {
                if (event.isConfirmed) {

                }
                return
            })
        }

    }
    isLoading && <h2>Loaginf............</h2>

    return (
        <div>

            <input value={name} onChange={(e) => setname(e.target.value)} placeholder='Enter Name' type='name' />
            <input value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Enter Password' type='password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
