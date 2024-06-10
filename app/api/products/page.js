import dbConn from "@/config/db"

const Products = async () =>{
    try {
        const response = await dbConn({query: "select * from  products",values:[]})
        return JSON.stringify(response)

    } catch (error) {
        console.log(error)
    }
    
}
export default Products

