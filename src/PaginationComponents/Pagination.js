import { useState } from "react"
import BlogPage from "../BlogPage"
import "./Pagination.css"
function Pagination(props){
const {data,dataPerPage,pagesShown,DisplayComponent}=props
const pages=Math.round(data.length/dataPerPage)
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
    console.log(currentPage)
    let start=Math.floor((currentPage-1)/pagesShown)*pagesShown //0
    return new Array(pagesShown).fill().map((_,idx)=>start+idx+1)//1
 
}
return(
    <>
    {/* {console.log(Math.round(data.length/dataPerPage))} */}
    {/* {console.log(getPaginatedData())} */}
    {console.log("DC",DisplayComponent)}
    {console.log("page nos array",getPageNumbers())}
    {
        getPaginatedData().map((item)=>(
            <DisplayComponent data={item}></DisplayComponent>
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
export default Pagination