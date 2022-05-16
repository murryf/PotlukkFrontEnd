import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ItemDeleter from "./item-delete-page";
import ItemRegistrationPage from "./item-register-page";
import ItemViewerPage from "./item-viewer-page";
import PotluckDeleter from "./potluck-deleter";
import PotluckUpdate from "./potluck-editor";
import PotluckRegistrationPage from "./potluck-register-page";
import PotluckViewerPage from "./potluck-viewer-page";
import UserLogInPage from "./user-login-page";
import UserRegisterPage from "./user-register-page";

export default function ManagerPage() {

    const [potlucks, setPotlucks] = useState([])
    const [items, setItems] = useState([])

    async function getAllPotlucks() {

        const response = await fetch(`http://potlukk-env.eba-cnm6zrpt.us-east-2.elasticbeanstalk.com/potlucks`)
        const body = await response.json();
        setPotlucks(body);
    }

    async function getAllItems() {
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

    function addItem() {
        getAllItems();
    }

    function deleteItem() {
        getAllItems();
    }

    useEffect(() => { getAllPotlucks() }, [])
    useEffect(() => { getAllItems() }, [])

    return (<>

        <BrowserRouter>
            <h1>Choose Your Path</h1>

            <fieldset>
                <legend>Do You Want To...</legend>
                <br />
                <label></label>
                <br />
                <button><Link to="/potlucks">Go to potlucks</Link></button>
                <br /><br /><br />
                <button ><Link to="/items">Go to items</Link></button>
                <br /><br /><br />
                <button><Link to="/userregister">Log In</Link></button>
            </fieldset>

            <Routes>
                <Route path="items" element={<><ItemViewerPage itemList={items} />
                    <ItemRegistrationPage onAddItem={addItem} />
                    <ItemDeleter onDeleteItem={deleteItem} /></>} />

                <Route path="potlucks" element={<><PotluckViewerPage potluckList={potlucks} />
                    <PotluckRegistrationPage onAddPotluck={addPotluck} />
                    <PotluckDeleter onDeletePotlucks={deletePotluck} />
                    <PotluckUpdate onPotluckUpdate={updatePotluck} /></>} />

                <Route path="userRegister" element={<><UserRegisterPage /> <UserLogInPage /></>} />

            </Routes>

        </BrowserRouter>


    </>)
}
