import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


export default function PotluckDeleter(props) {

    const deleteThisPotluck = props.onDeletePotlucks;


    const [potluckId, setPotluckId] = useState("");

    let potluck = "";
    let userStuff = "";


    async function deletePotluck() {

        const response = await fetch(`http://potlukk-env.eba-cnm6zrpt.us-east-2.elasticbeanstalk.com/potlucks/${potluckId}`);
        const body = await response.json();
        potluck = body;

        console.log();



        if (sessionStorage.getItem("user") != null) {
            userStuff = JSON.parse(sessionStorage.getItem("user"))
            if (potluck.creator === userStuff.userID && userStuff.userID != null) {
                const response = await fetch(`http://potlukk-env.eba-cnm6zrpt.us-east-2.elasticbeanstalk.com/potlucks/${potluckId}`, {
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

            } else {
                alert("You do not have authorization to delete this.")
            }
        } else {
            alert("You do not have authorization to delete this. Please log in to delete")
        }

    }

    function updatePotluckId(event) {
        setPotluckId(event.target.value)
    }

    return (<>
        <fieldset class="potluck_del">
            <legend class="red">Delete Potluck</legend>
            <br />
            <label>Potluck ID</label>
            <br />
            <input onInput={updatePotluckId} name="potluckId" type="text" placeholder="0" />
            <br />
            <br />
            <br />
            <button class="red" onClick={deletePotluck}>Delete Potluck</button>
        </fieldset>
    </>)
}
