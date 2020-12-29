import React from 'react';
import { Component } from 'react';
import { AiTwotoneHourglass } from 'react-icons/ai';
import '../ContactForm/ContactForm.styles.css'
import Axios from 'axios'

class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            nameValue: '',
            textAreaValue: '',
            email: '',
            sent: false
        };

    }

    //name handlers
    handleChange = (event) =>{
        this.setState({nameValue: event.target.value})
    }
   // handleSubmit = (event) => {
     //   console.log('A name was submitted: ' + this.state.nameValue);
      //  event.prevendtDefault()
       // this.setState({nameValue: '', textAreaValue: '', email: ''})
    // }

    handleSubmit = (event) =>{
        event.preventDefault()
        let data = {
            name: this.state.nameValue,
            message: this.state.textAreaValue,
            email: this.state.email
        }

        Axios.post('/api/forma', data)
        .then(res =>{
            this.setState({
                sent:true,
            }, this.resetForm()).catch(() =>{
                console.log('message not sent')
            })
        })
    }

    //for resetting initial data
    resetForm = () => {
        this.setState({
            nameValue: '',
            textAreaValue: '',
            email: ''
        })

        setTimeout(() => {
            this.setState({
                sent: false
            }, 3000)
        })
    }

    //text area handlers

    textAreaChange = (event) => {
        this.setState({textAreaValue: event.target.textAreaValue})
    }


    //email handler
    emailChange = (event) => {
        this.setState({email: event.target.email})
    }


    render(){
        return(
            <form className='formstyles' monSubmit={this.handleSubmit}>
                <label>
                    Name: <br />
                    <input type='text' value={this.state.nameValue} onChange={this.handleChange} />
                </label>
                <br />

                <label>
                    Email: <br />
                    <input type='email' value={this.state.email} onChange={this.emailChange} />
                </label>
                <br />

                <label>
                Message: <br />
                <textarea value={this.state.textAreaValue} onChange={this.textAreaChange} />
                 </label>
                <br/>
                    <input type='submit' value="Submit" />
            </form>
        )
    }
}

export default ContactForm