import React from 'react';
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';
import uniqid from 'uniqid';

export const SendMessage = ({user, getMessage}) => {
    const _user = user && <small className="text-start px-3">user : {user}</small>

    const sendMessage = (e) => {
        e.preventDefault()
        const {value} = e.target.parentNode.querySelector('input')
        getMessage({user, message: value, key: uniqid()})
        e.target.parentNode.reset()
    }

    return (
        <Form className="row mb-2">
            {_user}
            <Form.Group className="col-10" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="your massage" className="d-flex"/>
            </Form.Group>
            <Button className="col-2 btn-sm" variant="primary" type="submit" onClick={sendMessage}>
                Send
            </Button>
        </Form>
    )
}