'use client'
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {

    const { loginUserHandler, error, hasError, isSuccess } = useAuth()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter();


    const loginHandler = async (e) => {
        e.preventDefault();

        let data = {
            email: email,
            password: password
        }

        await loginUserHandler(data)
      
    }

    const displayLoginForm =  <form onSubmit={loginHandler} className="col-3 col-md-3 mx-auto">
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
            <p className="mt-2">Dont have an account yet ? <span style={{ cursor:'pointer',color:'blue' }} onClick={()=>router.push('/register')}>Register</span></p>
            </fieldset>
    </form> 
    
   
  

    return (
    <>
        {!isSuccess && displayLoginForm }
    </>
    );
}

export default LoginForm;