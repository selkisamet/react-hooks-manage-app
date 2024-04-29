import React from "react";
import { Button, Form } from "react-bootstrap";

const AddForm = () => {
    return (
        <Form className="custom-form">
            <Form.Group>
                <Form.Control type="text" placeholder="Name *" required />
            </Form.Group>

            <Form.Group>
                <Form.Control type="email" placeholder="Email *" required />
            </Form.Group>

            <Form.Group>
                <Form.Control as="textarea" placeholder="Address" rows="3" />
            </Form.Group>

            <Form.Group>
                <Form.Control type="text" placeholder="Phone" />
            </Form.Group>

            <Button type="submit" variant="success" block>Add New Emplooye</Button>
        </Form>
    )
}

export default AddForm;