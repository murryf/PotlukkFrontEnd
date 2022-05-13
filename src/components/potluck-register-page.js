import { useState } from "react"



export default function PotluckRegistrationPage(props) {

    const addPotluck = props.onAddPotluck;

    const [potluckName, setPotluckName] = useState("");
    const [potluckDate, setPotluckDate] = useState("");
    const [creatorId, setCreatorId] = useState("");

    function updatePotluckName(event) {
        setPotluckName(event.target.value)
    }

    function updatePotluckDate(event) {
        setPotluckDate(event.target.value)
    }

    function updateCreatorID(event) {
        setCreatorId(event.target.value)
    }

    function createPotluck(event) {
        const potluck = { potluckName: potluckName, potluckDate: potluckDate, creatorId: creatorId };
        console.log(potluck)
        addPotluck(potluck)
    }




    return (<>

        <h1>Register Potluck</h1>

        <fieldset>

            <legend>Register Potluck</legend>
            <br />
            <label>Potluck Name</label>
            <br />
            <input onInput={updatePotluckName} name="potluckName" type="text" placeholder="Mick's retirement" />
            <br />

            <label>Potluck Date</label>
            <br />
            <input onInput={updatePotluckDate} name="potluckDate" type="text" placeholder="12/12/22" />
            <br />

            <label>Creator ID</label>
            <br />
            <input onInput={updateCreatorID} name="creatorId" type="text" placeholder="1" />
            <br />
            <br />
            <button onClick={createPotluck}>Create Potluck</button>

        </fieldset>
    </>)


}