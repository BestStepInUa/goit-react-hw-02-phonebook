const ContactItem = ({ contact: { name, number } }) => {
    return (
        <li>
            <p>{name}: <span>{number}</span></p>
        </li> )
}

export default ContactItem