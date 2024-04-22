import axios from "axios";

const helpSearch =async (query) => {
   const response= await axios.get("http://localhost:3000/search/helpcenter",
    {
        headers: {
           "Content-Type": "application/json",
             /*"Authorization": "Bearer " + localStorage.getItem("token")*/},
        params: {
            query: query
        }
    })
    
    return response.data;
}
export default helpSearch;