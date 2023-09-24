// Write your solution in this file!
function employees() {
    const employee={
        name:"Sam"
    }
    return employee
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee }
    updatedEmployee[key] = value;
    return updatedEmployee;
}
const employee={
    name:"Sam"
}
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name","sam" );
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]= value;
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    const updatedEmployee = {...employee}
    delete updatedEmployee[key];
    return updatedEmployee;
   }
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
   }



















