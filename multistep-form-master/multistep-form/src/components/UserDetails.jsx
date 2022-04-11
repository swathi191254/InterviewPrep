import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class UserDetails extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            <Form color='green' >
                <h1 className="ui centered">Enter User Details</h1>
                <Form.Field>
                    <label>Full Name</label>
                    <input
                    placeholder='First Name'
                    onChange={this.props.handleChange('Full Name')}
                    defaultValue={values.fullName}
                    />
                </Form.Field>
                <Form.Field>
                <label>Age</label>
                <input placeholder='Age'
                onChange={this.props.handleChange('age')}
                defaultValue={values.age}
                />
            </Form.Field>
            <Form.Field>
                <label>Date of birth</label>
                <input placeholder='Dob'
                onChange={this.props.handleChange('age')}
                defaultValue={values.age}
                />
            </Form.Field>
               
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default UserDetails;