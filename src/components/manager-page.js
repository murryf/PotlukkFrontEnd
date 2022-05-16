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
    const [items, setItems] = useState([])

    async function getAllPotlucks() {

        const response = await fetch(`http://potlukk-env.eba-cnm6zrpt.us-east-2.elasticbeanstalk.com/potlucks`)
        const body = await response.json();
        setPotlucks(body);
    }

    async function getAllItems(){
        const response = await fetch(`http://potlukk-env.eba-cnm6zrpt.us-east-2.elasticbeanstalk.com/items`)
        const body = await response.json();
        setItems(body);
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

    function addItem(){
        getAllItems();
    }


    useEffect(() => { getAllPotlucks() }, [])
    useEffect(() => {getAllItems()},[])

    return (<>
        <ItemViewerPage itemList={items}/>
        <ItemRegistrationPage onAddItem={addItem}/>
        <PotluckRegistrationPage onAddPotluck={addPotluck} />
        <PotluckDeleter onDeletePotlucks={deletePotluck} />
        <PotluckUpdate onPotluckUpdate={updatePotluck} />
        <PotluckViewerPage potluckList={potlucks} />
        <UserRegisterPage />
    </>)
}