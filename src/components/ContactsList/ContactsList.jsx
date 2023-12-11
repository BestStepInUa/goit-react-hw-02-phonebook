import ContactsListSteled from "./ContactsList.styled";

const ContactsList = ({contacts}) => {    
        return (
            <ContactsListSteled>
            <h2>Contacts</h2>
            <ul>
                {contacts.map(({ id, name, number }) => (
                    <li key={id}>
                        <p>{name}: <span>{number}</span></p>
                    </li>                   
                )
                )}     
            </ul>
            </ContactsListSteled>    
        )
}

export default ContactsList