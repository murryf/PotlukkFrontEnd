import { useState } from "react"
import { Link } from "react-router-dom";



export default function UserRegisterPage(){



    const [userId,setuserId] = useState(0);


    //states for values in input field
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");



    //update state values
    function updateUserName(event){
        setName(event.target.value)
        console.log(name)
    }

    function updatePassword(event){
        setPassword(event.target.value)
        console.log(password)
    }




    async function createUser(){
        const user = {userID:0,userName:name,password:password}
        console.log(user)
        const response = await fetch("http://potlukk-env.eba-cnm6zrpt.us-east-2.elasticbeanstalk.com/users",{
            body:JSON.stringify(user),
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            }
        });

        if(response.status === 200){
            const body = await response.json();
            alert(`New user registered with id of ${body.userID}`)
        }else{
            alert("FAILED TO CREATE USER")
        }
    }




    return(<>
        <fieldset class="user_reg">
            <legend class="purple">Register User</legend>
            <br/>
            <label>User Name</label>
            <br/>
            <input onChange={updateUserName} name="userName" type="text" placeholder="Jane Doe"/>
            <br/>
            <label>User Password</label>
            <br/>
            <input onChange={updatePassword} name="password" type="text" placeholder= "******"/>
            <br/>
            <br/>
            <button class="purple" onClick={createUser}>Submit</button>

        </fieldset>


    </>)
}
