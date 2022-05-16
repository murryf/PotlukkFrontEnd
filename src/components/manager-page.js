import { useEffect, useState } from "react";
import ItemRegistrationPage from "./item-register-page";
import ItemViewerPage from "./item-viewer-page";
import PotluckDeleter from "./potluck-deleter";
import PotluckUpdate from "./potluck-editor";
import PotluckRegistrationPage from "./potluck-register-page";
import PotluckViewerPage from "./potluck-viewer-page";
import UserRegisterPage from "./user-register-page";

export default function ManagerPage() {

    const [potlucks, setPotlucks] = useState([])

    async function getAllPotlucks() {

        const response = await fetch(`http://potlukk-env.eba-cnm6zrpt.us-east-2.elasticbeanstalk.com/potlucks`)
        const body = await response.json();
        setPotlucks(body);
    }




    function addPotluck() {
        getAllPotlucks()
    }

    function deletePotluck() {
        getAllPotlucks()
    }

    function updatePotluck() {

        getAllPotlucks()
    }

    useEffect(() => { getAllPotlucks() }, [])


    return (<>
        <ItemViewerPage />
        <ItemRegistrationPage />
        <PotluckRegistrationPage onAddPotluck={addPotluck} />
        <PotluckDeleter onDeletePotlucks={deletePotluck} />
        <PotluckUpdate onPotluckUpdate={updatePotluck} />
        <PotluckViewerPage potluckList={potlucks} />
        <UserRegisterPage />
    </>)
}