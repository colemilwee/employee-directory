import React, { Component } from "react"
import axios from "axios"

export default class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first: null,
            last: null,
            age: null,
            email: null,
            phone: null
        }
    }

    componentDidMount() {
        axios.get("https://randomuser.me/api/")
            .then(response => {
                console.log("!!!!!!!!!!!!!!")
                console.log(response.data.results[0].name.first)
                
                this.setState({
                    first: response.data.results[0].name.first,
                    last: response.data.results[0].name.last,
                    age: response.data.results[0].dob.age,
                    email: response.data.results[0].email,
                    phone: response.data.results[0].phone
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.state.first}</td>
                <td>{this.state.last}</td>
                <td>{this.state.age}</td>
                <td>{this.state.email}</td>
                <td>{this.state.phone}</td>
            </tr>
        )
    }
}
