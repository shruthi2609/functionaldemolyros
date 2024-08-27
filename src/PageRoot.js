import axios from "axios"
import { useEffect, useState } from "react"
import BlogPage from "./BlogPage"
import Pagination from "./PaginationComponents/Pagination"

function PageRoot(){
    const [blogResults,setBlogResults]=useState([])
    useEffect(()=>{
        axios.get(`https://hn.algolia.com/api/v1/search?query=react`).then((res)=>setBlogResults(res.data.hits)).catch((err)=>console.log(err))
    },[])
return(
    <>
    <h1>Algolia</h1>
    <Pagination data={blogResults} dataPerPage={5} pagesShown={3}></Pagination>
    </>
)
}
export default PageRoot