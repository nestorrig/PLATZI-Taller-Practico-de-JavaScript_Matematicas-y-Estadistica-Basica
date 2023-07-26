const buttonCompanies = document.getElementById('Companies-button');
const buttonEmployees = document.getElementById('Employees-button');

const containerSalaries = document.getElementById('Salaries-container');

buttonCompanies.addEventListener('click', printCompanies);
function printCompanies(){
    containerSalaries.innerHTML = ''
    let companiesDiv = document.createElement('div');
    
    companiesDiv.className = 'companies-salaries salaries'
    
    const companiesKey = Object.keys(companies)
    for (const company of companiesKey) {
        let companyElement = document.createElement('div')
        let companyName = document.createElement('h4')
        let yearItem = document.createElement('div')
        
        companyElement.className = 'company-item'
        companyName.className = 'company-name'
        yearItem.className = 'company-years--container'
        
        companyName.innerText = company
        
        let companyKey = Object.keys(companies[company])
        for (const year of companyKey) {
            let yearContainer = document.createElement('div')
            let yearNumber = document.createElement('h5')
            let salariesContainer = document.createElement('ul')
            
            yearContainer.className = 'company-year'
            yearNumber.className = 'year'
            salariesContainer.className = 'salaries-container'

            yearNumber.innerText = year
            yearItem.append(yearContainer)
            yearContainer.append(yearNumber, salariesContainer)

            const salariesList = companies[company][year];
            // console.log(companies[company][year]);
            salariesList.forEach(salary => {
                let salaryItem = document.createElement('li')
                salaryItem.className = 'salary'
                salaryItem.innerText = `$${salary}`

                salariesContainer.append(salaryItem)
            });
        }
        companyElement.append(companyName, yearItem)
        companiesDiv.append(companyElement)
    }

    containerSalaries.append(companiesDiv)
    // buttonCompanies.disabled(true)
}
printCompanies()

buttonEmployees.addEventListener('click', printEmployees);
function printEmployees() {
    containerSalaries.innerHTML = ''
    let employeesDiv = document.createElement('div');
    
    employeesDiv.className = 'employees-salaries salaries'
    // console.log(salaries);
    for (const salary of salaries) {
        // console.log(salary);
        let employeeElement = document.createElement('div')
        let employeeDetails = document.createElement('div')
        let employeeName = document.createElement('h4')
        let employeeId = document.createElement('h4')
        employeeElement.className = 'employee-item'
        employeeDetails.className = 'employee-details'
        employeeName.className = 'employee-name'
        employeeId.className = 'employee-id'
        employeeName.innerText = salary.name
        employeeId.innerText = `ID: ${salary.id}`

        let employeeJobs = document.createElement('div');
        employeeJobs.className = 'employee-jobs--container'
        
        let employeeYearColumn = document.createElement('div');
        let employeeYearColumnName = document.createElement('h5');
        let employeeYearList = document.createElement('ul');
        employeeYearColumn.className = 'year-column'
        employeeYearList.className = 'year-list'
        employeeYearColumnName.innerText = 'Year'
        
        let employeeCompanyColumn = document.createElement('div');
        let employeeCompanyColumnName = document.createElement('h5');
        let employeeCompanyList = document.createElement('ul');
        employeeCompanyColumn.className = 'company-column'
        employeeCompanyList.className = 'company-list'
        employeeCompanyColumnName.innerText = 'Company'
        
        let employeeSalaryColumn = document.createElement('div');
        let employeeSalaryColumnName = document.createElement('h5');
        let employeeSalaryList = document.createElement('ul');
        employeeSalaryColumn.className = 'salary-column'
        employeeSalaryList.className = 'salarie-list'
        employeeSalaryColumnName.innerText = 'Salary'

        for (const job of salary.jobs) {
            // console.log(job);
            let employeeCompanie = document.createElement('li');
            let employeeYear = document.createElement('li');
            let employeeSalary = document.createElement('li');

            employeeCompanie.innerText = job.company
            employeeYear.innerText = job.year
            employeeSalary.innerText = `$${job.salary}`

            employeeYearList.append(employeeYear)
            employeeCompanyList.append(employeeCompanie)
            employeeSalaryList.append(employeeSalary)
        }
        employeeYearColumn.append(employeeYearColumnName, employeeYearList)
        employeeCompanyColumn.append(employeeCompanyColumnName, employeeCompanyList)
        employeeSalaryColumn.append(employeeSalaryColumnName, employeeSalaryList)
        
        employeeJobs.append(employeeYearColumn, employeeCompanyColumn, employeeSalaryColumn)

        employeeDetails.append(employeeName, employeeId)

        employeeElement.append(employeeDetails, employeeJobs)
    
        employeesDiv.append(employeeElement)
    }
    containerSalaries.append(employeesDiv)
}