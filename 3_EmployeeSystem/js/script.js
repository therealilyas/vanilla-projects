let employeeName = document.getElementById("name");
let employeeJob = document.getElementById("job");
let employeePassport = document.getElementById("passport");
let employeeCountry = document.getElementById("country");
let employeesUL = document.getElementById('employeesUL');

let searchInput = document.getElementById("searchInput");
let searchContainer = document.getElementById("containerSearch");
let searchResultDiv = document.getElementById("searchResultDiv");
let searchTimesBtn = document.getElementById("searchTimesBtn");

let editEmployeeContainer = document.getElementById("editEmployeeContainer");
editEmployeeContainer.style.display = 'none';



let employees = [];

function addEmployee(e) {
    const employee = {
        "id": employees.length,
        "name": employeeName.value,
        "job": employeeJob.value,
        "passport": employeePassport.value,
        "country": employeeCountry.value
    };

    employees.push(employee);
    loadEmployees(employees);

    // Clearing the form
    employeeName.value = '';
    employeeJob.value = '';
    employeePassport.value = '';
    employeeCountry.value = '';
}

searchInput.addEventListener("keyup", () => {
    searchResultDiv.innerHTML = "";

    if (searchInput.value == "") {
        searchResultDiv.innerHTML = "";
        return;
    }

    let searchedName = searchInput.value;
    let result = [];

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].name.toLowerCase().includes(searchedName.toLowerCase())) {
            result.push(employees[i]);
        }
    }

    if (result.length > 0) {
        for (let i = 0; i < result.length; i++) {
            let searchedResultP = document.createElement("p");
            searchedResultP.className = "searched-result-p";
            searchedResultP.innerText = result[i].name;

            searchResultDiv.appendChild(searchedResultP);

            searchedResultP.onclick = function() {
                let editName = document.getElementById('editName');
                let editJob = document.getElementById("editJob");
                let editPassport = document.getElementById("editPassport");
                let editCountry = document.getElementById("editCountry");
                let saveEditedInfoBtn = document.getElementById("saveEditedInfoBtn");

                if (editEmployeeContainer.style.display == "none") {
                    editEmployeeContainer.style.display = "block";
                }

                editName.value = result[i].name;
                editJob.value = result[i].job;
                editPassport.value = result[i].passport;
                editCountry.value = result[i].country;


                saveEditedInfoBtn.onclick = function() {
                    console.log("Clicked!")
                    result[i].name = editName.value;
                    result[i].job = editJob.value;
                    result[i].passport = editPassport.value;
                    result[i].country = editCountry.value

                    employees.forEach((employee) => {
                        if (employee.id == result[i].id) {
                            employee = result[i];
                        }
                    });

                    loadEmployees(employees);

                    console.log(result);

                    editEmployeeContainer.style.display = "none";
                }
            }
        }
    }

});

searchTimesBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchResultDiv.innerHTML = "";

})



function loadEmployees(employees) {
    employeesUL.innerHTML = "";

    employees.forEach(employee => {

        const employeeLI = document.createElement('li');
        employeeLI.className = "employee-li";
        employeeLI.id = employee.id;

        const employeeNameSpan = document.createElement('span');
        employeeNameSpan.innerText = employee.name;

        const deleteEmployeeBtn = document.createElement("button");
        deleteEmployeeBtn.className = 'delete-employee-btn';
        deleteEmployeeBtn.innerText = "X";

        employeeLI.appendChild(employeeNameSpan);
        employeeLI.appendChild(deleteEmployeeBtn);


        deleteEmployeeBtn.addEventListener("click", () => {
            console.log("Number of employees in company " + employees.length);
            delete employees[employee.id];

            employees = employees.filter((employees) => {
                if (employees !== undefined) {
                    return employees;
                }
            });

            employeeLI.remove();

            console.log("Number of employees in company " + employees.length);
        });

        const employeeDetails = document.createElement("div");
        employeeDetails.style.display = 'none';

        const employeeJobP = document.createElement("p");
        employeeJobP.innerText = employee.job;
        employeeDetails.appendChild(employeeJobP);

        const employeePassportP = document.createElement("p");
        employeePassportP.innerText = employee.passport;
        employeeDetails.appendChild(employeePassportP);

        const employeeCountryP = document.createElement("p");
        employeeCountryP.innerText = employee.country;
        employeeDetails.appendChild(employeeCountryP);

        employeeLI.appendChild(employeeDetails);

        employeeLI.onclick = function() {
            if (employeeDetails.style.display == 'block') {
                employeeDetails.style.display = 'none';

                employeeLI.style.backgroundColor = 'white';
                employeeLI.style.color = 'black';

                deleteEmployeeBtn.style.backgroundColor = 'maroon';
                deleteEmployeeBtn.style.color = 'white';

            } else {
                employeeDetails.style.display = 'block';
                employeeLI.style.backgroundColor = 'maroon';
                employeeLI.style.color = 'white';

                deleteEmployeeBtn.style.backgroundColor = 'white';
                deleteEmployeeBtn.style.color = 'maroon';
            }

        }

        employeesUL.appendChild(employeeLI);
    });
}