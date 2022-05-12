import { useState, useEffect } from "react";


export default function ItemViewerPage(){


    const items = [{id:1, name:"Coleslaw", description: "Fresh with crasins", status:"wanted", supplier: "Morgan", potluckID: 2}]

    const itemRows = items.map( i => <tr key={i.id}>
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