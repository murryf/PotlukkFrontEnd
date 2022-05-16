import { useState } from "react";


export default function PotluckUpdate(props) {

    const updateThisPotluck = props.onPotluckUpdate;


    const [potluckId, setPotluckId] = useState("");
    const [potluckDate, setPotluckDate] = useState("");

    async function updatePotluck() {
        const response = await fetch(`http://potlukk-env.eba-cnm6zrpt.us-east-2.elasticbeanstalk.com/potlucks/${potluckId}?date=${potluckDate}`, {
            body: JSON.stringify(potluckDate),
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.status === 200) {
            const body = await response.json()
            console.log(`Potluck ${potluckId} updated`)
            updateThisPotluck(body)
        } else {
            console.log("Failed to update potluck.")
        }


    }

    function updatePotluckId(event) {
        setPotluckId(event.target.value)
    }

    function updatePotluckDate(event) {
        setPotluckDate(event.target.value)
    }

    return (<>

        <h1>Edit Potluck</h1>

        <fieldset>

            <legend>Update Potluck</legend>
            <br />
            <label>Potluck ID</label>
            <br />
            <input onInput={updatePotluckId} name="potluckId" type="text" placeholder="0" />
            <br />
            <label>New Potluck Date and Time</label>
            <br />
            <input onInput={updatePotluckDate} name="potluckDate" type="text" placeholder="12/1/2019 12:00 pm" />
            <br />
            <br />
            <button onClick={updatePotluck}>Update Potluck</button>

        </fieldset>
    </>)
}
