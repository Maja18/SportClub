import React from 'react';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';
import './Register.css';

const Register = () => {
    return(
        <div className="Register">
            <h2 class="h2">Register</h2>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Name</Label>
                    <Input
                    type="name"
                    name="firstName"
                    id="exampleName"
                    placeholder="Name"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Last name</Label>
                    <Input
                    type="name"
                    name="lastName"
                    id="exampleLastName"
                    placeholder="Last name"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="example@example.com"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="********"
                    />
                </FormGroup>
                <FormGroup>
                    <div className='div'>
                    <input type="radio" value="EDITOR" name="role" />
                    <label class="label">EDITOR</label>
                    <input class="roleInput" type="radio" value="VIEWER" name="role" /> 
                    <label class="label">VIEWER</label>
                    </div>
                </FormGroup>
                <div class="button-container-div">
                    <Button color="success">Submit</Button>
                </div>
            </Form>
        </div>
    );

};

export default Register