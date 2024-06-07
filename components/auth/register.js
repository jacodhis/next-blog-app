'use client'

import { useState } from "react"
import { useRouter } from "next/navigation";

const { useAuth } = require("@/context/AuthContext")


const RegisterForm = () => {

    const { registerHandler} =  useAuth()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const [error, setError] = useState("")

    const router = useRouter();


    const submitHandler = async  (e) => {
        e.preventDefault();

        //form validation
         if (!name || !email || !phone || !password || !repeatPassword) {
            setError("All fields are required.");
            return;
        }

        if (password !== repeatPassword) {
            setError("Passwords do not match.");
            return;
        }

        //submit our form 

        let data = {
            name:name,
            email: email,
            password: password,
            phone:phone
        }
        try {
            await registerHandler(data)
        } catch (e) {
            console.log(e)
        }
        
      
    }


    const displayRegisterForm  = <form onSubmit={submitHandler} className="col-3 col-md-3 mx-auto">
                <fieldset >
                    <legend>Register </legend>
                    {error.length > 0 && <div className="text-danger">{error}</div>}
                    <div class="mb-3">
                    <label for="email" class="form-label">Name </label>{ name}
                            <input type="text" id="email" class="form-control" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email </label>
                            <input type="email" id="email" class="form-control" placeholder="enter Email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label">Phone </label>
                            <input type="text" id="email" class="form-control" placeholder="Enter Phone" onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" id="password" class="form-control" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" id="password" class="form-control" placeholder="Enter password" onChange={(e) => setRepeatPassword(e.target.value)} />
                        </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                    <p className="mt-2">Already have  ? <span style={{ cursor:'pointer',color:'blue' }} onClick={()=>router.push('/login')}>login</span></p>
                </fieldset>
    </form> 

    return (<>
        {displayRegisterForm}
    </>);
}

export default RegisterForm;