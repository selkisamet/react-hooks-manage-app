import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext";

const AddForm = () => {
    const { addEmployee } = useContext(EmployeeContext);

    const [input, setInput] = useState({ name: "", email: "", address: "", phone: "" });

    const handleSubmit = (e) => {
        e.preventDefault();

        addEmployee(input.name, input.email, input.address, input.phone);
    }

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    return (
        <Form className="custom-form" onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control type="text" name="name" placeholder="Name *" required value={input.name} onChange={handleChangeInput} />
            </Form.Group>

            <Form.Group>
                <Form.Control type="email" name="email" placeholder="Email *" required value={input.email} onChange={handleChangeInput} />
            </Form.Group>

            <Form.Group>
                <Form.Control as="textarea" name="address" placeholder="Address" rows="3" value={input.address} onChange={handleChangeInput} />
            </Form.Group>

            <Form.Group>
                <Form.Control type="text" name="phone" placeholder="Phone" value={input.phone} onChange={handleChangeInput} />
            </Form.Group>

            <Button type="submit" variant="success">Add New Emplooye</Button>
        </Form>
    )
}

export default AddForm;