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
            <div class="pageheading">
                <label class="head_label">Stellar Potlukk App</label>
                <fieldset class="head_fieldset">
                    <legend class="blue">Choose Your Path...</legend>
                    <br />
                    <div class="link_grid">
                        <div class="link_01"><button class="header_button"><Link to="/potlucks">Go to potlucks...</Link></button></div>
                        <div class="link_02"><button class="header_button"><Link to="/items">Go to items...</Link></button></div>
                        <div class="link_03"><button class="header_button"><Link to="/userregister">Log In...</Link></button></div>
                        <div class="link_04"><button class="header_button"><Link to="/">Return home</Link></button></div>
                    </div>
                </fieldset>
            </div>
            <div class="routes">
                <Routes>
                    <Route path="items" element={
                        <>
                            <div class="item_grid">
                                <div class="item_view"><ItemViewerPage itemList={items} /></div>
                                <div class="item_reg"><ItemRegistrationPage onAddItem={addItem} /></div>
                                <div class="item_del"><ItemDeleter onDeleteItem={deleteItem}/></div>
                            </div>
                        </>
                    }/>

                    <Route path="potlucks" element={
                        <>
                            <div class="potluck_grid">
                                <div class="potluck_view"><PotluckViewerPage potluckList={potlucks} /></div>
                                <div class="potluck_reg"><PotluckRegistrationPage onAddPotluck={addPotluck} /></div>
                                <div class="potluck_del"><PotluckDeleter onDeletePotlucks={deletePotluck} /></div>
                                <div class="potluck_up"><PotluckUpdate onPotluckUpdate={updatePotluck} /></div>
                            </div>
                        </>
                    }/>

                    <Route path="userRegister" element={
                        <>
                            <div class="user_grid">
                                <UserRegisterPage />
                                <UserLogInPage />
                            </div>
                        </>
                    }/>

                </Routes>
            </div>
        </BrowserRouter>


    </>)
}
