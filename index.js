const employee = {
    name: "Andrew",
    streetAddress: "15 cedar st"
}

function updateEmployeeWithKeyAndValue() {
    const updatedEmployee = {...employee}
        updatedEmployee.name = "Sam",
        updatedEmployee.streetAddress = "11 Broadway"

        return updatedEmployee;

}

function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.name = "Sam"
    employee.streetAddress = "12 Broadway"

    return employee
}

function deleteFromEmployeeByKey() {
    const deleteKeyName = {...employee}
    delete deleteKeyName.name

    return deleteKeyName
}

function destructivelyDeleteFromEmployeeByKey() {
    
    delete employee.name;
    
    return employee;
}