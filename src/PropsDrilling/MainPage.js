import ContentPage from "./ContentPage"

function MainPage(props){
   
    return(
        <>
       <h1>Main Page</h1>
       <ContentPage data={props.username}></ContentPage>
        </>
    )
}
export default MainPage