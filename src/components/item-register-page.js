import { useEffect, useState } from "react"

export default function ItemRegistrationPage(props){
    // state variable for potlucks to be used to check, if valid potluck id exists
    const [potlucks, setPotlucks] = useState([]);

    // gets all potlucks for aforesaid existence-check
    async function getAllPotlucks(){
        const response = await fetch("http://potlukk-env.eba-cnm6zrpt.us-east-2.elasticbeanstalk.com/potlucks");
        const body = await response.json();
        setPotlucks(body);
    }

    useEffect(()=>{
        getAllPotlucks();
    },[])

    // states for item input fields
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [supplier, setSupplier] = useState("");
    const [potluckId, setPotluckId] = useState(0);

    // update item-registration fields
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

    // render HTML
    function renderInputLine(){
			const itemListElem = document.getElementById("input_line");
			let inputHTML = "";
			for(const i of input){
				inputHTML += i;
			}
			itemListElem.innerHTML = inputHTML;

    // makes new item and adds it to database
    // checks if the potluckID is valid
    async function makeItem(){
        const item = {id:0,name:name,description:description,status:"covered",supplier:supplier,potluckID:Number(potluckId)};
        console.log(item);
        const response = await fetch("http://potlukk-env.eba-cnm6zrpt.us-east-2.elasticbeanstalk.com/items",{
            body:JSON.stringify(item),
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            }
        });

        if(response.status === 200){
            const body = await response.json();
            alert(`New ITEM was registered for Potluck ${body.potluckID}`);
        }else{
            alert("ITEM CREATION FAILED!!!");
        }
    }

    return(<>
        <h1>Item Registration</h1>
        <fieldset>
            <legend>Register Item</legend>

            <label htmlFor="item_name">Item Name</label>
            <br/>
            <input onChange={updateItemName} name="name" type="text" placeholder="Fruit Salad"/>
            <br/>
            <label htmlFor="description">Description</label>
            <br/>
            <input onChange={updateItemDesc} name="description" type="text" placeholder="Apples, grapes, cantalope"/>

            <br/>
            <label htmlFor="supplier">Supplier</label>
            <br/>
            <input onChange={updateItemSupplier} name="supplier" type="text" placeholder="John Doe"/>

            <br/>
            <label htmlFor="potluck">Potluck ID</label>
            <br/>
            <input onChange={updatePotluckId} name="potluck" list="Potlucks"/>
            <br/>
            <br/>
            <button onClick={makeItem}>Register Item</button>
        </fieldset>
    </>)
}
