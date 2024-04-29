import React, { Fragment, useContext, useState } from "react";
import Employee from "./Employee";
import { Button, Modal } from "react-bootstrap";
import AddForm from "./AddForm";
import { EmployeeContext } from "../context/EmployeeContext";

const EmployeeList = () => {
    const [show, setShow] = useState(false);
    const employeeContext = useContext(EmployeeContext);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

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
                    <Employee employees={employeeContext} />
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