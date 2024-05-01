import React, { Fragment, useContext, useEffect, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { Button, Modal } from "react-bootstrap";
import EditForm from "./EditForm";

const Employee = ({ employee }) => {
    const { deleteEmployee } = useContext(EmployeeContext);

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose();
    }, [employee]);

    return (
        <Fragment>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>
                <button className="btn text-warning" data-toggle="modal" onClick={handleShow}><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
                <button className="btn text-danger" data-toggle="modal" onClick={() => deleteEmployee(employee.id)}><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
            </td>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title>Edit Emplooye</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <EditForm theEmployee={employee} />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default Employee;