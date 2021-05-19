const Employee = props => {
    
    return (
        <tr>
            <td>{props.person.name.first}</td>
            <td>{props.person.name.last}</td>
            <td>{props.person.dob.age}</td>
            <td>{props.person.email}</td>
            <td>{props.person.phone}</td>
        </tr>
    )
}

export default Employee;