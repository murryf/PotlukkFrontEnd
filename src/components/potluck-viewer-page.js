import { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


export default function PotluckViewerPage(props) {






    const potluckRows = props.potluckList.map(p => <tr key={p.id}>
        <td class="p_id">{p.id}</td>
        <td class="none">{p.potluckName}</td>
        <td class="none">{p.potluckDate}</td>
        <td class="c_id">{p.creator}</td>

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
