import employeeListData from "../data";
const { createContext, useState } = require("react");


export const EmployeeContext = createContext();

const EmployeeContextProvider = ({ children }) => {
    const [employees, setEmployees] = useState(employeeListData);

    return (
        <EmployeeContext.Provider value={employees}>
            {children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;