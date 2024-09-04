import { useReducer } from "react"
import contactReducer from "./contactReducer"
import ContactContext from "./ContactContext"
import ContactConsumer from "./ContactConsumer"
import DispplayContacts from "./DisplayContacts"
function ContactProvider(){
    const [contacts,dispatch]=useReducer(contactReducer,[
        {
            id:0,
            cname:"john",
            cno:"john@gmail.com"
        }
    ])
    

    return(
<>
{console.log(contacts)}
<ContactContext.Provider value={{contacts,dispatch}}>
    <ContactConsumer></ContactConsumer>
    <DispplayContacts></DispplayContacts>
</ContactContext.Provider>

</>
    )
}
export default ContactProvider