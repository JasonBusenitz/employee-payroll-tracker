// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data


const employeesArray = []
const collectEmployees = function () {

  while (addEmployeesBtn || addMore) {

    const employeeData = {
      firstName: window.prompt('Add Employee First Name'),
      lastName: window.prompt('Add Employee Last Name'),
      salary: window.prompt("Add Employee Salary")
    };
    employeesArray.push(employeeData);

    const addMore = window.confirm("Do you wish to add another employee?");


    if (addMore) {
    } else {

      return employeesArray;
    };
  };
};


// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let average = 0;
  let sum = 0;
  for (i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i]
    sum = sum += parseInt(currentEmployee.salary);
  }
  average = sum / employeesArray.length;
  return console.log(`This is the average salary $${average}`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  const object = employeesArray[Math.floor(Math.random() * employeesArray.length)];
  const winner = object.firstName;
  return console.log(`The winner of the random drawing is ${winner}!!!`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};


// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);