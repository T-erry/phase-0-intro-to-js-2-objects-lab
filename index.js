// Write your solution in this file!
const employee ={
terry:"Kisumu"
}
// beforeEach(function () {
//     for (const key in employee) {
//       delete employee[key];
//     }

//     employee.name = 'Sam';
//   });
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
      };

    
}
console.log(updateEmployeeWithKeyAndValue(employee,'Sam', '11 Broadway'))


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
        employee[key] = value
        return employee;

}
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway'))

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee}
        delete newEmployee[key] 
         return newEmployee;
}
 deleteFromEmployeeByKey(employee, 'name');


  function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key] 
    return employee;
 }
 destructivelyDeleteFromEmployeeByKey(employee, 'name');

