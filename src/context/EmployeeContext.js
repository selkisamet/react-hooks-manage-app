import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import employeeListData from "../data";

export const EmployeeContext = createContext();

const EmployeeContextProvider = ({ children }) => {
    const [employees, setEmployees] = useState(employeeListData);

    const sortedEmployees = employees.sort((a, b) => a.name.localeCompare(b.name));

    const addEmployee = (name, email, address, phone) => {
        setEmployees([...employees, { id: uuidv4(), name, email, address, phone }]);
    }

    const updateEmployee = (id, updatedEmployee) => {
        setEmployees(employees.map((employee) => (employee.id === id ? updatedEmployee : employee)));
    }

    const deleteEmployee = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id));
    }

    const value = {
        sortedEmployees,
        addEmployee,
        deleteEmployee,
        updateEmployee,
    }

    return (
        <EmployeeContext.Provider value={value}>
            {children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;