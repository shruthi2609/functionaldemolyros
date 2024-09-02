import PastEvents from "./PastEvents"

function ContentPage(props){
   
    return(
        <>
       <h1>ContentPage Page</h1>
       <PastEvents></PastEvents>
       <Footer data={props.username}></Footer>
        </>
    )
}
export default ContentPage