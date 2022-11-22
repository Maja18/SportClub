import React from 'react';
import './Login.css';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';

const Login = () =>  {

    return(
        <div className="Login">
        <h2>LogIn</h2>
        <Form>
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
            <Button color="success">Submit</Button>
      </Form>
    </div>
    );

};

export default Login;