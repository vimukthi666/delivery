import React,{Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './delivery.css';


const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')
const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key:'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'
    }
}))





export default class DeliveryService extends Component{


    constructor(props){
        super(props)

        this.onChangeContactName = this.onChangeContactName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangePostalCode = this.onChangePostalCode.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state ={
            contactName : '',
            address : '',
            country : '',
            postalCode : '',
            email : ''
            
        }
    }


    onChangeContactName(e){
        this.setState({contactName : e.target.value})
    }
    onChangeAddress(e){
        this.setState({address : e.target.value})
    }
    onChangeCountry(e){
        this.setState({country : e.target.value})
    }
    onChangePostalCode(e){
        this.setState({postalCode : e.target.value})
    }
    onChangeEmail(e){
        this.setState({email : e.target.value})
    }
    onSubmit(e){
        e.preventDefault();

        const deliveryObject={
            contactName : this.state.contactName,
            address : this.state.address,
            country : this.state.country,
            postalCode : this.state.postalCode,
            email : this.state.email,
        };

        axios.post('http://localhost:4000/deliverys/delivery-service',deliveryObject)
        .then(
            transporter.sendMail({
                to:'this.props.email',
                from: 'vimukthijayasinghe98@gmail.com',
                subject:'Payment Success',
                html:'<h3>Payment Successfull</h3>'
            })
         
        )
        .then(alert('Order Placed!'))
        .then(this.setState({contactName: '', address: '', country: '', postalCode: '', email: ''})) ;
       
     
    }

       

    render(){
        return(
            
        <div class="form-wrapper">
         <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
           
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav nr-auto">
             <li className="nav-item">
                <h2>Delivery Information</h2>
             </li>
             </ul>
           </div>
          </nav><br/><br/>


             
           <section className="signup">
               <div className="container mt-5">
                   <div className="signup-content">
                   <Form onSubmit = {this.onSubmit}>
                <Form.Group controlId="contactName">
                    <Form.Label>Contact Name </Form.Label>
                    <Form.Control type="text" value={this.state.contactName} onChange ={this.onChangeContactName}/>
                </Form.Group>
            
                <Form.Group controlId="address">
                    <Form.Label>Address </Form.Label>
                    <Form.Control type="text" value={this.state.address} onChange ={this.onChangeAddress}/>
                </Form.Group>
                
                <Form.Group controlId="country">
                    <Form.Label>Country </Form.Label>
                    <Form.Control type="text" value={this.state.country} onChange = {this.onChangeCountry}/>
                </Form.Group>

                <Form.Group controlId="postalCode">
                    <Form.Label>Postal Code </Form.Label>
                    <Form.Control type="text" value={this.state.postalCode} onChange = {this.onChangePostalCode}/>
                </Form.Group>
                    <br/>
                <Form.Group controlId="email">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="text" value={this.state.email} onChange = {this.onChangeEmail}/>
                </Form.Group>
                    <br/>    

                <Button variant="success" size="lg" block="block" type="submit">
                    SAVE Information
                </Button>

            </Form>

                   </div>
               </div>
               </section>
            
            
            </div>    
        </div>
         

        );
        

    }
}


