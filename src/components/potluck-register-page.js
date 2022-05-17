import { useState } from "react"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";



export default function PotluckRegistrationPage(props) {

    const addPotluck = props.onAddPotluck;

    const [potluckName, setPotluckName] = useState("");
    const [potluckDate, setPotluckDate] = useState("");
    const [creator, setCreatorId] = useState("");
    let userStuff = "";

    function updatePotluckName(event) {
        setPotluckName(event.target.value)
    }

    function updatePotluckDate(event) {
        setPotluckDate(event.target.value)
    }

    function updateCreatorID(event) {
        setCreatorId(event.target.value)
    }

    async function createPotluck() {
        const potluck = { id: 0, potluckName: potluckName, potluckDate: potluckDate, creator: creator };






        if (userStuff != "") {
            userStuff = JSON.parse(sessionStorage.getItem("user"))
            setCreatorId(userStuff.userID)

            const response = await fetch(`http://potlukk-env.eba-cnm6zrpt.us-east-2.elasticbeanstalk.com/potlucks`, {
                body: JSON.stringify(potluck),
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.status === 200) {
                const body = await response.json()
                console.log("Potluck added" + potluck)
                addPotluck(body)
            } else {
                console.log("Failed to add potluck.")
            }
        } else {
            alert("You do not have authorization to create a potluck. Please log in to do so.")
        }

    }




    return (<>
        <fieldset class="potluck_reg">
            <legend class="green">Register Potluck</legend>
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
            <button class="green" onClick={createPotluck}>Create Potluck</button>
        </fieldset>
    </>)


}
