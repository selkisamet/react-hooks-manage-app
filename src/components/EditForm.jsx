import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext";

const EditForm = ({ theEmployee }) => {
    const { updateEmployee } = useContext(EmployeeContext);

    const id = theEmployee.id;

    const [input, setInput] = useState({ name: theEmployee.name, email: theEmployee.email, address: theEmployee.address, phone: theEmployee.phone });
    const { name, email, address, phone } = input;

    const updatedEmployee = { id, name, email, address, phone }

    const handleSubmit = (e) => {
        e.preventDefault();

        updateEmployee(id, updatedEmployee);
    }

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    return (
        <Form className="custom-form" onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control type="text" name="name" placeholder="Name *" required value={name} onChange={handleChangeInput} />
            </Form.Group>

            <Form.Group>
                <Form.Control type="email" name="email" placeholder="Email *" required value={email} onChange={handleChangeInput} />
            </Form.Group>

            <Form.Group>
                <Form.Control as="textarea" name="address" placeholder="Address" rows="3" value={address} onChange={handleChangeInput} />
            </Form.Group>

            <Form.Group>
                <Form.Control type="text" name="phone" placeholder="Phone" value={phone} onChange={handleChangeInput} />
            </Form.Group>

            <Button type="submit" variant="success">Edit Emplooye</Button>
        </Form>
    )
}

export default EditForm;