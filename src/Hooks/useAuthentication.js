import axios from "axios";
import { useState } from "react";



const useAuthentication = () => {
    const [user, setUser] = useState({});
    const [admin, setAdmin] = useState(false)
    const [authError, setAuthError] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    console.log(authError)
    console.log(user);

    const RegisterUser = (name, email, password, role) => {
        setIsLoading(true);
        axios.post("http://localhost:5000/api/v1/register", {
            username: name,
            email: email,
            password: password,
            role: role
        })
            .then(res => setUser(res.data))
            .catch(err => setAuthError(err))
            .finally(setIsLoading(false))
    }
    const loginUser = (email, password) => {
        setIsLoading(true);
        axios.post("http://localhost:5000/api/v1/login", {
            email: email,
            password: password
        })
            .then(res => setUser(res.data))
            .catch(err => setAuthError(err))
            .finally(setIsLoading(false))
    }
    return { RegisterUser, loginUser, user }

}

export default useAuthentication;