import ItemRegistrationPage from "./item-register-page";
import ItemViewerPage from "./item-viewer-page";
import PotluckRegistrationPage from "./potluck-register-page";
import PotluckViewerPage from "./potluck-viewer-page";
import UserLogInPage from "./user-login-page";
import UserRegisterPage from "./user-register-page";

export default function ManagerPage(){


    //returns "html"
    return(<>
        <PotluckViewerPage/>
        <ItemViewerPage/>
        <ItemRegistrationPage/>
        <PotluckRegistrationPage/>
        <UserRegisterPage/>
        <UserLogInPage/>
    </>)
}