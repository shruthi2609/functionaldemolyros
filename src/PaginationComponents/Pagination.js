import { useState } from "react"
import BlogPage from "../BlogPage"

function Pagination(props){
const {data,dataPerPage,pagesShown}=props
const [pages]=useState(Math.round(data.length/dataPerPage))
const [currentPage,setCurrentPage]=useState(1)
const getPaginatedData=()=>{
    const startIndex=(currentPage*dataPerPage)-dataPerPage //0
    const endIndex=startIndex+dataPerPage//10
    return data.slice(startIndex,endIndex)
}
const goToNextPage=(e)=>{
    setCurrentPage(currentPage+1)
}
const goToPrevPage=(e)=>{
    setCurrentPage(currentPage-1)
}
const changePage=(item)=>{
   setCurrentPage(item)
}
const getPageNumbers=()=>{
    let start=Math.floor((currentPage-1)/pagesShown)*pagesShown //0
    return new Array(pagesShown).fill().map((_,idx)=>start+idx+1)//1
 
}
return(
    <>
    {/* {console.log(Math.round(data.length/dataPerPage))} */}
    {/* {console.log(getPaginatedData())} */}
    {console.log("page nos array",getPageNumbers())}
    {
        getPaginatedData().map((item)=>(
            <BlogPage data={item}></BlogPage>
        ))
    }
    <br></br>
   
    <button onClick={(e)=>goToPrevPage(e)}>prev</button>
    {
        getPageNumbers().map((item)=>(
            <button onClick={(e)=>changePage(item)}>{item}</button>
        ))
    }
    <button onClick={(e)=>goToNextPage(e)}>next</button>
    </>
)
}
export default Pagination