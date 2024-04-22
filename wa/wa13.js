// Problem 1: 
const employees = [
    { firstName: "Sam", department: "Tech", designation: "Manager", salary: 40000, raiseEligible: true },
    { firstName: "Mary", department: "Finance", designation: "Trainee", salary: 18500, raiseEligible: true },
    { firstName: "Bill", department: "HR", designation: "Executive", salary: 21200, raiseEligible: false }
];

// Problem 2: 
const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
};


// Problem 3: 
const newEmployee = { firstName: "Anna", department: "Tech", designation: "Executive", salary: 25600, raiseEligible: false };
company.employees.push(newEmployee);



// Problem 4: 
function calculateTotalSalary(company) {
    let totalSalary = 0;
    company.employees.forEach(employee => {
        totalSalary += employee.salary;
    });
    return totalSalary;
}


// Problem 5: 
function giveRaise(company) {
    company.employees.forEach(employee => {
        if (employee.raiseEligible) {
            employee.salary *= 1.1; 
            employee.raiseEligible = false;
        }
    });
}


// Problem 6: 
const employeesWorkingFromHome = ['Anna', 'Sam'];
company.employees.forEach(employee => {
    employee.wfh = employeesWorkingFromHome.includes(employee.firstName);
});

// Problem 1
console.log("Problem 1:", employees);

// Problem 2
console.log("Problem 2:", company);

// Problem 3
company.employees.push(newEmployee);
console.log("Problem 3:", company);

// Problem 4
console.log("Problem 4:", calculateTotalSalary(company));

// Problem 5
giveRaise(company);
console.log("Problem 5:", company);

// Problem 6
console.log("Problem 6:", company);