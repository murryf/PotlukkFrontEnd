import { useState } from "react";


export default function PotluckDeleter(props) {

    const deleteThisPotluck = props.onDeletePotlucks;


    const [potluckId, setPotluckId] = useState("");

    async function deletePotluck() {
        const response = await fetch(`https://potlukk-env.eba-cnm6zrpt.us-east-2.elasticbeanstalk.com/potlucks/${potluckId}`, {
            body: JSON.stringify(potluckId),
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.status === 200) {
            const body = await response.json()
            console.log(`Potluck ${potluckId} deleted`)
            deleteThisPotluck(body)
        } else {
            console.log("Failed to add potluck.")
        }


    }

    function updatePotluckId(event) {
        setPotluckId(event.target.value)
    }

    return (<>

        <h1>Delete Potluck</h1>

        <fieldset>

            <legend>Delete Potluck</legend>
            <br />
            <label>Potluck ID</label>
            <br />
            <input onInput={updatePotluckId} name="potluckId" type="text" placeholder="0" />
            <br />
            <br />
            <br />
            <button onClick={deletePotluck}>Delete Potluck</button>

        </fieldset>
    </>)
}
