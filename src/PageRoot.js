import axios from "axios"
import { useEffect, useState } from "react"
import BlogPage from "./BlogPage"
import Pagination from "./PaginationComponents/Pagination"
import usePagination from "./CustomHooks/usePagination"

function PageRoot(){
    const [blogResults,setBlogResults]=useState([])
    const dataPerPage=5
    const pagesShown=3
    let {pages,
        currentPage,
        getPaginatedData,
        getPageNumbers,
        goToNextPage,
        goToPrevPage,changePage}=usePagination(blogResults,dataPerPage,pagesShown)
    useEffect(()=>{
        axios.get(`https://hn.algolia.com/api/v1/search?query=react`).then((res)=>setBlogResults(res.data.hits)).catch((err)=>console.log(err))
    },[])
return(
    <>
    {console.log(pages,
        currentPage,
        getPaginatedData,
        getPageNumbers,
        goToNextPage,
        goToPrevPage)}
    <h1>Algolia</h1>
    {
        getPaginatedData().map((item)=>(
        <>
        <h1>{item.title}</h1>
    <p>{item.author}</p>
    <a href={item.url}>click here to read</a>
        </>
        ))
    }
    <br></br>
   
    <button onClick={(e)=>goToPrevPage(e)}>prev</button>
    {
        getPageNumbers().map((item)=>{
            if(item<=pages){
                return  <button onClick={(e)=>changePage(item)} className={`${currentPage===item?'unhidden':'hidden'}`}>{item}</button>
            }
        }
           
        )
    }
    <button onClick={(e)=>goToNextPage(e)}>next</button>
    </>
)
}
export default PageRoot