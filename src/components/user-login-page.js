import { useState } from "react"


export default function UserLogInPage(){

    //Dummy values
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    //Update local values
    function updateUserName(event){
        setUserName(event.target.value)
    }

    //update local value
    function updatePassword(event){
        setPassword(event.target.value)
    }

    //jsx "html" response
    return(<>

        <h1>User Log in</h1>

        <fieldset>
            <label htmlFor="Username">UserName</label>
            <br/>
            <input onChange={updateUserName} name="username" type= "text" placeholder="JaneDoe"/>
            <br/>
            <label htmlFor="password">Password</label>
            <br/>
            <input onChange={updatePassword} name="password" type = "password"/>
            <br/>
            <button>Log In</button>    
        </fieldset>
        
    </>)

}