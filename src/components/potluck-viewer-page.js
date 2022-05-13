import { useState, useEffect } from "react";


export default function PotluckViewerPage(){

    // async function getAllPotlucks() {
    //     const response = await fetch();      //TO DO FOR FUNCTIONALITY
    //     const body = await response.json();
    //     setPotlucks(body)
    // }


    // const [potlucks, setPotlucks] = useState([]);

    const potlucks = [{id:1, potluckName:"Jill Birthday", potluckDate:"12/12/12", creator: 5},
    {id:2, potluckName:"Fellowship Guilde", potluckDate:"1/2/33", creator: 2},
    {id:3, potluckName:"Miller Family Cookout", potluckDate:"4/4/22", creator: 7}]

    const potluckRows = potlucks.map(p => <tr key={p.id}>
           <td>{p.id}</td>
           <td>{p.potluckName}</td>
           <td>{p.potluckDate}</td>
           <td>{p.creator}</td> 

        </tr>)

    return (<>
        <h1>Poltuck viewer</h1>
        <table>
            <thead>
                <tr><th>Potluck ID</th>
                <th>Potluck Name</th>
                <th>Potluck Date</th>
                <th>Creator ID</th></tr>
            </thead>
            <tbody>
                {potluckRows}
            </tbody>
        </table>

    </>)
}