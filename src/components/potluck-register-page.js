import { useState } from "react"



export default function PotluckRegistrationPage(){

    //Consts for storage of local information
    const [potluckName, setPotluckName] = useState("");
    const [potluckDate, setPotluckDate] = useState("");
    const [creatorId, setCreatorId] = useState("");
    

    //Method to update local name
    function updateName(event){
        setPotluckName(event.target.value)
        console.log(potluckName)
    }

    //method to update local date
    function updateDate(event){
        setPotluckDate(event.target.value)
        console.log(potluckDate)
    }

    //method to update local creator
    function updateCreator(event){
        setCreatorId(event.target.value)
        console.log(creatorId)
    }

    //"html" to be returned
    return(<>
            <h1>Register Potluck</h1>   
            <fieldset>
                <legend>Register Potluck</legend>
                <br/>
                <label>Potluck Name</label>
                <br/>
                <input onChange={updateName} name = "potluckName" type = "text" placeholder = "Mick's retirement"/>
                <br/>

                <label>Potluck Date</label>
                <br/>
                <input onChange={updateDate} name = "potluckDate" type = "text"  placeholder="12/12/22"/>
                <br/>

                <label>Creator ID</label>
                <br/>
                <input onChange={updateCreator} name = "creatorId" type = "text" placeholder="1" />
                <br/>
                <button>Register Potluck</button>

            </fieldset>
        </>)


}