import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";



export default function ItemDeleter(props){

    const deleteThisItem = props.onDeleteItem;

    const [itemId, setItemId] = useState("");

    async function deleteItem(){
        const response = await fetch(`http://potlukk-env.eba-cnm6zrpt.us-east-2.elasticbeanstalk.com/items/${itemId}`,{
            body: JSON.stringify(itemId),
            method: "DELETE",
            headers :{
                "Content-Type":"application/json"
            }
        });

        if(response.status === 200){
            const body = await response.json()
            console.log(`Item ${itemId} deleted`)
            deleteThisItem(body)
        } else {
            console.log("Failed to delete item")
        }
    }

    function updateItemID(event) {
        setItemId(event.target.value)
    }

    return (<>
        <fieldset class="route_fieldset">
            <legend class="red">Delete Item</legend>
            <br/>
            <label>Item ID</label>
            <br/>
            <input onInput={updateItemID} name="id" type="text" placeholder = "0" />
            <br/><br/><br/>
            <button class="red" onClick={deleteItem}>Delete Item</button>
        </fieldset>
    </>)
}
