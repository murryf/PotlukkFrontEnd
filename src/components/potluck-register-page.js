import { useState } from "react"



export default function PotluckRegistrationPage(){

    const [potluckName, setPotluckName] = useState("");
    const [potluckDate, setPotluckDate] = useState("");
    const [creatorId, setCreatorId] = useState("");
    
    


    return(<>
        
            <h1>Register Potluck</h1>

            <fieldset>

                <legend>Register Potluck</legend>
                <br/>
                <label>Potluck Name</label>
                <br/>
                <input name = "potluckName" type = "text" placeholder = "Mick's retirement"/>
                <br/>

                <label>Potluck Date</label>
                <br/>
                <input name = "potluckDate" type = "text"  placeholder="12/12/22"/>
                <br/>

                <label>Creator ID</label>
                <br/>
                <input name = "creatorId" type = "text" placeholder="1" />

            </fieldset>
        </>)


}