import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ItemDeleter from "./item-delete-page";
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

    function deleteItem(){
        getAllItems();
    }

    useEffect(() => { getAllPotlucks() }, [])
    useEffect(() => {getAllItems()},[])

    return (<>

    <h1>Main</h1>

    <BrowserRouter>
        <Routes>
            <Route path="itemviewer" element={ <ItemViewerPage itemList={items}/>}/>
            <Route path="itemregister" element={<ItemRegistrationPage onAddItem={addItem}/>}/>
            <Route path="deleteitem" element={<ItemDeleter onDeleteItem={deleteItem}/>}/>

            <Route path="potluckViewer" element={<PotluckViewerPage potluckList={potlucks} />}/>
            <Route path="potluckregister" element={<PotluckRegistrationPage onAddPotluck={addPotluck} />}/>
            <Route path="potluckdeleter" element={<PotluckDeleter onDeletePotlucks={deletePotluck} />}/>    
            <Route path="potluckupdate" element={<PotluckUpdate onPotluckUpdate={updatePotluck} />}/>

            <Route path="userRegister" element={<UserRegisterPage />}/>

        </Routes>
    
    </BrowserRouter>
   
      
    </>)
}