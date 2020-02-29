import React,{Component} from "react";
import './ContactForm.css'
import axios from 'axios'


class ContactForm extends Component{
    constructor(props) {
        super(props);
        this.state={name:'',subject:'',email:'',description:''}
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(evt){
        this.setState({[evt.target.name]:evt.target.value })
    }
    handleSubmit(evt){
        evt.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:100/contact',this.state)
            .then(response=>{
                console.log(response)
            })
            .catch(error=>{
                console.log(error)
            })

        //this.setState({name:"",subject:"",email:"",description:""})
    }
    render() {
        return(
            <div className="form-container">
                <h1>Message us</h1>
                <form onSubmit={this.handleSubmit} method="POST" action="/contact" className="form">

                    <div ><input placeholder="Name" className="input" id="name" name="name" type='text' value={this.state.name} onChange={this.handleChange} /></div>
                    <div><input placeholder="Subject" className="input" name="subject" type='text' value={this.state.subject} onChange={this.handleChange} /></div>
                    <div><input placeholder="Email" className="input" name="email" type="email" value={this.state.email} onChange={this.handleChange} /></div>
                    <div><textarea className="textarea" placeholder="Description" name="description" value={this.state.description} onChange={this.handleChange}></textarea></div>

                    <button className="ourbtn" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default ContactForm;