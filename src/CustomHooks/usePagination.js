import { useState } from "react"
function usePagination(data,dataPerPage,pagesShown){
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
return {
    pages,
    currentPage,
    getPaginatedData,
    getPageNumbers,
    goToNextPage,
    goToPrevPage,
    changePage
}

}
export default usePagination