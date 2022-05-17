import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function UserLogInPage() {

    //Dummy values
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    //Update local values
    function updateUserName(event) {
        setUserName(event.target.value)
    }

    //update local value
    function updatePassword(event) {
        setPassword(event.target.value)
    }


    async function sendLoginInfo() {
        const loginInfo = { userName, password }
        const response = await fetch(`http://potlukk-env.eba-cnm6zrpt.us-east-2.elasticbeanstalk.com/login`, {
            method: "POST",
            body: JSON.stringify(loginInfo),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const userInfo = await response.json()
        sessionStorage.setItem("user", JSON.stringify(userInfo));
        navigate("/potlucks")
        console.log(userInfo);
    }

    //jsx "html" response
    return (<>
        <fieldset class="user_log">
            <legend class="blue">User Log in</legend>
            <label htmlFor="Username">UserName</label>
            <br />
            <input onChange={updateUserName} name="username" type="text" placeholder="JaneDoe" />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input onChange={updatePassword} name="password" type="password" />
            <br />
            <br />
            <button class="blue" onClick={sendLoginInfo}>Log In</button>
        </fieldset>
    </>)

}
