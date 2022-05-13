import { useState } from "react"



export default function ItemRegistrationPage(props){

 

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [supplier, setSupplier] = useState("");
    const [potluckId, setPotluckId] = useState(0);


    function updateItemName(event){
        setName(event.target.value)
        console.log(name)
    }

    function updateItemDesc(event){
        setDescription(event.target.value)
        console.log(description)
    }

    function updateItemSupplier(event){
        setSupplier(event.target.value)
        console.log(supplier)
    }

    function updatePotluckId(event){
        setPotluckId(event.target.value)
        console.log(potluckId)
    }

   


    return(<>
        <h1>Item Registration</h1>
        <fieldset>
            <legend>Register Item</legend>

            <label>Item Name</label>
            <br/>
            <input onChange={updateItemName} name="name" type="text" placeholder="Fruit Salad"/>
            <br/>
            <label>Description</label>
            <br/>
            <input onChange={updateItemDesc} name="description" type="text" placeholder="Apples, grapes, cantalope"/>

            <br/>
            <label>Supplier</label>
            <br/>
            <input onChange={updateItemSupplier} name="supplier" type="text" placeholder="John Doe"/>

            <br/>
            <label>Potluck ID</label>
            <br/>
            <input onChange={updatePotluckId} name="potluck" type="text" placeholder="1"/>

        </fieldset>
    
    </>)
}