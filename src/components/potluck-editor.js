import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


export default function PotluckUpdate(props) {

    const updateThisPotluck = props.onPotluckUpdate;


    const [potluckId, setPotluckId] = useState("");
    const [potluckDate, setPotluckDate] = useState("");

    let potluck = "";
    let userStuff = "";

    async function updatePotluck() {
        const response = await fetch(`http://potlukk-env.eba-cnm6zrpt.us-east-2.elasticbeanstalk.com/potlucks/${potluckId}`);
        const body = await response.json();
        potluck = body;



        if (sessionStorage.getItem("user") != null) {
            userStuff = JSON.parse(sessionStorage.getItem("user"))
            if (potluck.creator === userStuff.userID) {
                const response = await fetch(`http://potlukk-env.eba-cnm6zrpt.us-east-2.elasticbeanstalk.com/potlucks/${potluckId}?date=${potluckDate}`, {
                    body: JSON.stringify(potluckDate),
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                if (response.status === 200) {
                    const body = await response.json()
                    console.log(body.creator)
                    console.log(`Potluck ${potluckId} updated`)
                    updateThisPotluck(body)
                } else {
                    console.log("Failed to update potluck.")
                }

            } else {
                alert("You do not have authorization to edit this.")
            }
        } else {
            alert("You do not have authorization to edit this. Please log in to edit")
        }


    }

    function updatePotluckId(event) {
        setPotluckId(event.target.value)
    }

    function updatePotluckDate(event) {
        setPotluckDate(event.target.value)
    }

    return (<>
        <fieldset class="potluck_up">
            <legend class="purple">Update Potluck</legend>
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
            <button class="purple" onClick={updatePotluck}>Update Potluck</button>
        </fieldset>
    </>)
}
