

export default function UserLogInPage(){

    return(<>

        <h1>User Log in</h1>

        <fieldset>
            <label htmlFor="Username">UserName</label>
            <br/>
            <input name="username" type= "text" placeholder="JaneDoe"/>
            <br/>
            <label htmlFor="password">Password</label>
            <br/>
            <input name="password" type = "password"/>
            <br/>
            <button>Log In</button>    
        </fieldset>
    </>)

}