import React, { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

const Employee = ({ employees }) => {

    const { deleteEmployee } = useContext(EmployeeContext);

    return (
        employees.map((employee) => (
            <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.address}</td>
                <td>{employee.phone}</td>
                <td>
                    <button className="btn text-warning" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
                    <button className="btn text-danger" data-toggle="modal" onClick={() => deleteEmployee(employee.id)}><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
                </td>
            </tr >
        ))

    )
}

export default Employee;