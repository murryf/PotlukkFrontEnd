import { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";



export default function ItemViewerPage(props){

    const [items, setItems] = useState([]);


    async function getAllItems(){
        const response = await fetch("http://potlukk-env.eba-cnm6zrpt.us-east-2.elasticbeanstalk.com/items")
        const body = await response.json();
        setItems(body)
    }

    useEffect(() => {getAllItems()},[]);

    const itemRows = props.itemList.map( i => <tr key={i.id}>
            <td class="i_id">{i.id}</td>
            <td class="none">{i.name}</td>
            <td class="none">{i.description}</td>
            <td class="none">{i.status}</td>
            <td class="none">{i.supplier}</td>
            <td class="p_id">{i.potluckID}</td>
        </tr>)

    return (<>
      <fieldset class="route_fieldset">
          <legend class="blue">Item viewer</legend>
          <div class="item_window">
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
          </div>
      </fieldset>
    </>)
}
