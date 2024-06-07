'use client'
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";


const LoginForm = () => {

    const { loginUserHandler, error, hasError, isSuccess } = useAuth()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const loginHandler = (e) => {
        e.preventDefault();

        let data = {
            email: email,
            password: password
        }

        loginUserHandler(data)
      
    }

    const displayLoginForm =  <form onSubmit={loginHandler}>
                <fieldset >
                    <legend>Login </legend>
                    {hasError && <div className="text-danger">{error}</div>}
                    <div class="mb-3">
                        <label for="email" class="form-label">Email </label>
                        <input type="email" id="email" class="form-control" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" id="password" class="form-control" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </fieldset>
        </form> 
  

    return (
    <>
        {!isSuccess && displayLoginForm }
    </>
    );
}

export default LoginForm;