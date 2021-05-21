import { Component } from "react";
import Form from 'react-bootstrap/Form';



export default class Home extends Component{

    
    render(){
        return(
            <div>

            <Form>
                <p>this is Home</p>
                <Form.Group controlId="email">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="text" value={this.props.cemail} disabled="enable"/>
                </Form.Group>
            </Form>    
                
                
            </div>
            
        );
    }
}