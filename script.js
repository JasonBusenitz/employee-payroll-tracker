// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data


const collectEmployees = function () {
  const employeesArray = []

  while (addEmployeesBtn || addMore) {

    const employeeData = {
      firstName: window.prompt("Please add your employee's first name."),
      lastName: window.prompt("Please add your employee's last name."),
      salary: window.prompt("Please add your employee's salary.")
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
  let averageSalary = 0;
  let sum = 0;
  const numberOfEmployees = employeesArray.length;


  for (i = 0; i < numberOfEmployees; i++) {
    const currentEmployee = employeesArray[i];
    sum = sum += parseFloat(currentEmployee.salary);
  }
  averageSalary = sum / numberOfEmployees;
  const averageSalaryWithTwoDecimals = averageSalary.toFixed(2);

  if (Number.isInteger(averageSalary)) {
    return console.log(`The average salary between our ${numberOfEmployees} employee(s) is $${averageSalary}`);
  } else {
    return console.log(`The average salary between our ${numberOfEmployees} employee(s) is $${averageSalaryWithTwoDecimals}`);

  };

};

// Select a random employee
const getRandomEmployee = function (employeesArray) {

  const employee = employeesArray[Math.floor(Math.random() * employeesArray.length)];
  return console.log(`Congradulations to ${employee.firstName} ${employee.lastName}, our random drawing winner!`);
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