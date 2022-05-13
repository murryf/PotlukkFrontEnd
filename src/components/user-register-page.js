import { useState } from "react"



export default function UserRegisterPage(){

    const[userName, setUserName] = useState("");
    const[password, setPassword] = useState("");

    function updateUserName(event){
        setUserName(event.target.value)
        console.log(userName)
    }

    function updatePassword(event){
        setPassword(event.target.value)
        console.log(password)
    }


    return(<>
        <h1>Register New User</h1>
        <fieldset>

            <legend>Register User</legend>
            <br/>
            <label>User Name</label>
            <br/>
            <input onChange={updateUserName} name="userName" type="text" placeholder="Jane Doe"/>
            <br/>
            <label>User Password</label>
            <br/>
            <input onChange={updatePassword} name="password" type="password"/>
            <br/>
            <button>Register User</button>

        </fieldset>
    
    </>)
}