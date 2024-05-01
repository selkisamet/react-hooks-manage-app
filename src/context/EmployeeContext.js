import { createContext, useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import employeeListData from "../data";

export const EmployeeContext = createContext();

const EmployeeContextProvider = ({ children }) => {
    const reducer = (employees, action) => {
        switch (action.type) {
            case "addEmployee":
                return [...employees, {
                    id: uuidv4(), name: action.employee.name, email: action.employee.email, address: action.employee.address, phone: action.employee.phone
                }]

            case "updateEmployee":
                return employees.map((employee) => (employee.id === action.id ? action.updatedEmployee : employee));

            case "deleteEmployee":
                return employees.filter(employee => employee.id !== action.id);

            default:
                return employees;
        }
    }

    const [employees, dispatch] = useReducer(reducer, employeeListData, () => {
        const employees = localStorage.getItem("employees");
        return employees ? JSON.parse(employees) : [];
    });

    useEffect(() => {
        localStorage.setItem("employees", JSON.stringify(employees));
    }, [employees]);

    const sortedEmployees = employees.sort((a, b) => a.name.localeCompare(b.name));

    const value = {
        sortedEmployees,
        dispatch,
    }

    return (
        <EmployeeContext.Provider value={value}>
            {children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;