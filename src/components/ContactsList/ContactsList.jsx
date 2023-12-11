import ContactItem from "./ContactItem";

import ContactsListSteled from "./ContactsList.styled";

const ContactsList = ({contacts}) => {    
        return (
            <ContactsListSteled>
            <h2>Contacts</h2>
            <ul>
                {contacts.map(contact => (
                    <ContactItem key={contact.id} contact={contact} />         
                ))}     
            </ul>
            </ContactsListSteled>    
        )
}

export default ContactsList