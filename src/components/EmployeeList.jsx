import React, { Fragment, useContext, useEffect, useState } from "react";
import Employee from "./Employee";
import { Alert, Button, Modal } from "react-bootstrap";
import AddForm from "./AddForm";
import { EmployeeContext } from "../context/EmployeeContext";

const EmployeeList = () => {
    const { employees } = useContext(EmployeeContext);

    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleShowAlert = () => {
        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    }

    useEffect(() => {
        setShowAlert(false);
    }, [])

    useEffect(() => {
        handleClose();

        return () => {
            handleShowAlert();
        };
    }, [employees]);


    return (
        <Fragment>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Employees</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button className="btn btn-success" data-toggle="modal" onClick={handleShow}>
                            <i className="material-icons">&#xE147;</i> <span>Add New Employee</span>
                        </Button>
                    </div>
                </div>
            </div>

            <Alert show={showAlert} variant="success">
                Employee List successfully update!
            </Alert>

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.sort((a, b) => a.name.localeCompare(b.name)).map((employee) => (
                            <tr key={employee.id}>
                                <Employee employee={employee} />
                            </tr >
                        ))
                    }
                </tbody>
            </table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title>Add Emplooye</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <AddForm />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default EmployeeList;