import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';


class PersonalDetails extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props
        return(
        <Form color='blue' >
            <h1 className="ui centered">Enter Personal Details</h1>
            <Form.Field>
                <label>Residence</label>
                <input placeholder='Residence'
                onChange={this.props.handleChange('residence')}
                defaultValue={values.residence}
                />
            </Form.Field>
            <Form.Field>
                <label>Address</label>
                <input placeholder='Address'
                onChange={this.props.handleChange('city')}
                defaultValue={values.city}
                />
            </Form.Field>
            <Form.Field>
                <label>Pincode</label>
                <input placeholder='Pincode'
                onChange={this.props.handleChange('pincode')}
                defaultValue={values.pincode}
                />
            </Form.Field>
            <Button onClick={this.back}>Back</Button>
            <Button onClick={this.saveAndContinue}>Submit </Button>
        </Form>
        )
    }
}

export default PersonalDetails;