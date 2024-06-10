const registerUser = async (props) =>{
    let query = "INSERT INTO users (id, name, email,phone, password) VALUES (?, ?, ?, ?, ?);" ;
    let values = ["",props.name,props.email,props.phone,props.password]
    try {
      const response = await dbConn({ query: query, values: values})
        setAuthUser(response.data.user);
        setIsLoggedIn(true);
        Cookies.set('authToken', response.data.token);
        router.push('/products'); 
        console.log("success")
    } catch (error) {
        setHasError(true)
        setError(error)
      console.log(error)
    }
}
export default registerUser;