import ItemRegistrationPage from "./item-register-page";
import ItemViewerPage from "./item-viewer-page";
import PotluckRegistrationPage from "./potluck-register-page";
import PotluckViewerPage from "./potluck-viewer-page";

export default function ManagerPage(){

    return(<>
        <PotluckViewerPage/>
        <ItemViewerPage/>
        <ItemRegistrationPage/>
        <PotluckRegistrationPage/>
  
    </>)
}