import { useState, useEffect } from "react";


export default function ItemViewerPage(props){

    const [items, setItems] = useState([]);


    async function getAllItems(){
        const response = await fetch("https://potlukk-env.eba-cnm6zrpt.us-east-2.elasticbeanstalk.com/items")    
        const body = await response.json();
        setItems(body)
    }

    useEffect(() => {getAllItems()},[]);

    const itemRows = props.itemList.map( i => <tr key={i.id}>
            <td>{i.id}</td>
            <td>{i.name}</td>
            <td>{i.description}</td>
            <td>{i.status}</td> 
            <td>{i.supplier}</td> 
            <td>{i.potluckID}</td> 
        </tr>)

    return (<>
        <h1>Item viewer</h1>
        <table>
            <thead>
                <tr><th>item ID</th>
                <th>item Name</th>
                <th>item description</th>
                <th>item status</th>
                <th>Item Supplier</th>
                <th>potluck id</th></tr>
            </thead>
            <tbody>
                {itemRows}
            </tbody>
        </table>

    </>)
}