import { useState } from "react";
import ItemRegistrationPage from "./item-register-page";
import ItemViewerPage from "./item-viewer-page";
import PotluckRegistrationPage from "./potluck-register-page";
import PotluckViewerPage from "./potluck-viewer-page";
import UserRegisterPage from "./user-register-page";

export default function ManagerPage() {

    const [potlucks, setPotlucks] = useState([])


    function addPotluck(potluck) {
        const clonedPotlucks = [...potlucks];
        console.log(potluck);
        clonedPotlucks.push(potluck);
        setPotlucks(clonedPotlucks)
    }

    return (<>
        <ItemViewerPage />
        <ItemRegistrationPage />
        <PotluckRegistrationPage onAddPotluck={addPotluck} />
        <PotluckViewerPage potluckList={potlucks} />
        <UserRegisterPage />
    </>)
}